import { Client } from "@notionhq/client";
import {BlockObjectResponse, PartialBlockObjectResponse} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
    auth: process.env.NOTION_SECRET,
});

export const databaseId = process.env.NOTION_DATABASE_ID;

export const getDatabase = async (databaseId: string) => {
    const { results } = await notion.databases.query({ database_id: databaseId });
    return results;
};

export const getPage = async (pageId: string) => {
    return await notion.pages.retrieve({ page_id: pageId });
};

export const getBlocks = async (blockId: string): Promise<Array<PartialBlockObjectResponse | BlockObjectResponse>> => {
    blockId = blockId.replaceAll("-", "");

    const { results } = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 100,
    });

    const childBlocks = results.map(async (block) => {
        if ("has_children" in block && block.has_children) {
            const children = await getBlocks(block.id);
            return { ...block, children };
        }
        return block;
    });

    const response = await Promise.all(childBlocks).then((blocks) => {
        return blocks.reduce((acc, curr) => {
            if ("type" in curr && curr.type === "bulleted_list_item") {
                if ("type" in acc[acc.length - 1] && acc[acc.length - 1]['type'] === "bulleted_list") {
                    acc[acc.length - 1][acc[acc.length - 1]['type']]['children']?.push(curr);
                } else {
                    acc.push({
                        id: getRandomInt(10 ** 99, 10 ** 100).toString(),
                        type: "bulleted_list",
                        bulleted_list: { children: [curr] },
                    });
                }
            } else if (curr.type === "numbered_list_item") {
                if (acc[acc.length - 1]?.type === "numbered_list") {
                    acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
                } else {
                    acc.push({
                        id: getRandomInt(10 ** 99, 10 ** 100).toString(),
                        type: "numbered_list",
                        numbered_list: { children: [curr] },
                    });
                }
            } else {
                acc.push(curr);
            }
            return acc;
        }, []);
    });
    console.log(response);
    return response;
};

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
