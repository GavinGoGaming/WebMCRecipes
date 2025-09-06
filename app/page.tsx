"use client";

import { Badge, Tooltip } from "@klashdevelopment/mc.css";
import { MCIcons } from "@klashdevelopment/mcicons";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

function RecipeGrid({ items }: {
    items: ({
        low_url: string;
        high_url: string;
        name: string;
        path: string;
    } | null)[]
}) {
    return (
        <div className="badge-grid">
            {items.map((item, i) => (
                <Badge badge={'inventory_slot'} key={i}>
                    {item && <Image alt="slot" src={item?.high_url} width={32} height={32} />}
                </Badge>
            ))}
        </div>
    );
}

const badges = [
    [{
        type: 'effect',
        icon: MCIcons.blocks.Spawner,
        text: <>
            Unused Generators
        </>
    }, {
        icon: MCIcons.blocks.White_Glazed_Terracotta,
        text: <>
            Empty Generator <br />
            <RecipeGrid items={[
                null, MCIcons.items.Iron_Ingot, null,
                MCIcons.items.Iron_Ingot, null, MCIcons.items.Iron_Ingot,
                null, MCIcons.items.Iron_Ingot, null
            ]} />
        </>
    }],
    [{
        type: 'effect',
        icon: MCIcons.blocks.Cobblestone,
        text: <>
            Cobblestone Generators
        </>
    }, {
        icon: MCIcons.blocks.Light_Gray_Glazed_Terracotta,
        text: <>
            Cobblestone Generator <br />
            <RecipeGrid items={[
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.Cobblestone, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta
            ]} />
        </>
    }, {
        icon: MCIcons.blocks.Gray_Glazed_Terracotta,
        text: <>
            Upgraded Cobblestone Generator <br />
            <RecipeGrid items={[
                null, MCIcons.blocks.Diamond_Block, null,
                MCIcons.blocks.Diamond_Block, MCIcons.blocks.Light_Gray_Glazed_Terracotta, MCIcons.blocks.Diamond_Block,
                null, MCIcons.blocks.Diamond_Block, null
            ]} />
        </>
    }, {
        icon: MCIcons.blocks.Green_Glazed_Terracotta,
        text: <>
            Super Upgraded Cobblestone Generator <br />
            <RecipeGrid items={[
                null, MCIcons.blocks.Netherite_Block, null,
                MCIcons.blocks.Netherite_Block, MCIcons.blocks.Gray_Glazed_Terracotta, MCIcons.blocks.Netherite_Block,
                null, MCIcons.blocks.Netherite_Block, null
            ]} />
        </>
    }],
    [{
        type: 'effect',
        icon: MCIcons.items.Diamond,
        text: <>
            Ore Generators
        </>
    }, {
        icon: MCIcons.blocks.Light_Blue_Glazed_Terracotta,
        text: <>
            Ore Generator <br />
            <RecipeGrid items={[
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.items.Iron_Ingot, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta
            ]} />
        </>
    }, {
        icon: MCIcons.blocks.Purple_Glazed_Terracotta,
        text: <>
            Upgraded Ore Generator <br />
            <RecipeGrid items={[
                null, MCIcons.blocks.Diamond_Block, null,
                MCIcons.blocks.Diamond_Block, MCIcons.blocks.Light_Blue_Glazed_Terracotta, MCIcons.blocks.Diamond_Block,
                null, MCIcons.blocks.Diamond_Block, null
            ]} />
        </>
    }, {
        icon: MCIcons.blocks.Black_Glazed_Terracotta,
        text: <>
            Super Upgraded Ore Generator <br />
            <RecipeGrid items={[
                null, MCIcons.blocks.Netherite_Block, null,
                MCIcons.blocks.Netherite_Block, MCIcons.blocks.Purple_Glazed_Terracotta, MCIcons.blocks.Netherite_Block,
                null, MCIcons.blocks.Netherite_Block, null
            ]} />
        </>
    }],
    [{
        type: 'effect',
        icon: MCIcons.items.Experience_Bottle,
        text: <>
            XP Generators
        </>
    }, {
        icon: MCIcons.blocks.Yellow_Glazed_Terracotta,
        text: <>
            XP Generator <br />
            <RecipeGrid items={[
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.items.Experience_Bottle, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta
            ]} />
        </>
    }, {
        icon: MCIcons.blocks.Orange_Glazed_Terracotta,
        text: <>
            Upgraded XP Generator <br />
            <RecipeGrid items={[
                null, MCIcons.blocks.Diamond_Block, null,
                MCIcons.blocks.Diamond_Block, MCIcons.blocks.Yellow_Glazed_Terracotta, MCIcons.blocks.Diamond_Block,
                null, MCIcons.blocks.Diamond_Block, null
            ]} />
        </>
    }, {
        icon: MCIcons.blocks.Pink_Glazed_Terracotta,
        text: <>
            Super Upgraded XP Generator <br />
            <RecipeGrid items={[
                null, MCIcons.blocks.Netherite_Block, null,
                MCIcons.blocks.Netherite_Block, MCIcons.blocks.Orange_Glazed_Terracotta, MCIcons.blocks.Netherite_Block,
                null, MCIcons.blocks.Netherite_Block, null
            ]} />
        </>
    }],
    [{
        type: 'effect',
        icon: MCIcons.items.Spawn_Egg,
        text: <>
            Mob Spawners
        </>
    }, {
        icon: MCIcons.blocks.Cyan_Glazed_Terracotta,
        text: <>
            Mob Spawner <br />
            <RecipeGrid items={[
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.items.Bone, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta
            ]} />
        </>
    }, {
        icon: MCIcons.blocks.Blue_Glazed_Terracotta,
        text: <>
            Friendly Mob Spawner <br />
            <RecipeGrid items={[
                null, MCIcons.blocks.Cyan_Glazed_Terracotta, null,
                MCIcons.blocks.Cyan_Glazed_Terracotta, MCIcons.items.Water_Bucket, MCIcons.blocks.Cyan_Glazed_Terracotta,
                null, MCIcons.blocks.Cyan_Glazed_Terracotta, null
            ]} />
        </>
    }, {
        icon: MCIcons.blocks.Magenta_Glazed_Terracotta,
        text: <>
            Hostile Mob Spawner <br />
            <RecipeGrid items={[
                null, MCIcons.blocks.Cyan_Glazed_Terracotta, null,
                MCIcons.blocks.Cyan_Glazed_Terracotta, MCIcons.items.Lava_Bucket, MCIcons.blocks.Cyan_Glazed_Terracotta,
                null, MCIcons.blocks.Cyan_Glazed_Terracotta, null
            ]} />
        </>
    }],
    [{
        type: 'effect',
        icon: MCIcons.items.Wheat_Seeds,
        text: <>
            Nature Generators
        </>
    }, {
        icon: MCIcons.blocks.Lime_Glazed_Terracotta,
        text: <>
            Nature Generator <br />
            <RecipeGrid items={[
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.items.Wheat_Seeds, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta
            ]} />
        </>
    }, {
        icon: MCIcons.blocks.Brown_Glazed_Terracotta,
        text: <>
            Dirt Generator <br />
            <RecipeGrid items={[
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.Dirt, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta
            ]} />
        </>
    }],
    [{
        type: 'effect',
        icon: MCIcons.items.Redstone,
        text: <>
            Redstone Generators
        </>
    }, {
        icon: MCIcons.blocks.Red_Glazed_Terracotta,
        text: <>
            Redstone Generator <br />
            <RecipeGrid items={[
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.Redstone_Block, MCIcons.blocks.White_Glazed_Terracotta,
                MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta, MCIcons.blocks.White_Glazed_Terracotta
            ]} />
        </>
    }],
    [{
        type: 'effect',
        icon: MCIcons.items.Hopper,
        text: <>
            Hoppers
        </>
    }, {
        icon: MCIcons.items.Hopper,
        text: <>
            Gold Hopper <br />
            <RecipeGrid items={[
                MCIcons.items.Gold_Ingot, MCIcons.items.Gold_Ingot, MCIcons.items.Gold_Ingot,
                MCIcons.items.Gold_Ingot, MCIcons.items.Hopper, MCIcons.items.Gold_Ingot,
                MCIcons.items.Gold_Ingot, MCIcons.items.Gold_Ingot, MCIcons.items.Gold_Ingot
            ]} />
        </>
    }, {
        icon: MCIcons.items.Hopper,
        text: <>
            Emerald Hopper <br />
            <RecipeGrid items={[
                MCIcons.items.Emerald, MCIcons.items.Emerald, MCIcons.items.Emerald,
                MCIcons.items.Emerald, MCIcons.items.Hopper, MCIcons.items.Emerald,
                MCIcons.items.Emerald, MCIcons.items.Emerald, MCIcons.items.Emerald
            ]} />
        </>
    }, {
        icon: MCIcons.items.Hopper,
        text: <>
            Diamond Hopper <br />
            <RecipeGrid items={[
                MCIcons.items.Diamond, MCIcons.items.Diamond, MCIcons.items.Diamond,
                MCIcons.items.Diamond, MCIcons.items.Hopper, MCIcons.items.Diamond,
                MCIcons.items.Diamond, MCIcons.items.Diamond, MCIcons.items.Diamond
            ]} />
        </>
    }, {
        icon: MCIcons.items.Hopper,
        text: <>
            Copper Hopper <br />
            <RecipeGrid items={[
                MCIcons.items.Copper_Ingot, MCIcons.items.Copper_Ingot, MCIcons.items.Copper_Ingot,
                MCIcons.items.Copper_Ingot, MCIcons.items.Hopper, MCIcons.items.Copper_Ingot,
                MCIcons.items.Copper_Ingot, MCIcons.items.Copper_Ingot, MCIcons.items.Copper_Ingot
            ]} />
        </>
    }, {
        icon: MCIcons.items.Hopper,
        text: <>
            Netherite Hopper <br />
            <RecipeGrid items={[
                MCIcons.items.Netherite_Ingot, MCIcons.items.Netherite_Ingot, MCIcons.items.Netherite_Ingot,
                MCIcons.items.Netherite_Ingot, MCIcons.items.Hopper, MCIcons.items.Netherite_Ingot,
                MCIcons.items.Netherite_Ingot, MCIcons.items.Netherite_Ingot, MCIcons.items.Netherite_Ingot
            ]} />
        </>
    }],
    [{
        type: 'effect',
        icon: MCIcons.items.Golden_Axe,
        text: <>
            Tools
        </>
    }, {
        icon: MCIcons.items.Iron_Axe,
        text: <>
            Thor Hammer <br />
            <RecipeGrid items={[
                null, MCIcons.items.Iron_Axe, null,
                MCIcons.items.Trident, MCIcons.items.Netherite_Ingot, MCIcons.items.Trident,
                MCIcons.items.Netherite_Ingot, MCIcons.items.Netherite_Ingot, MCIcons.items.Netherite_Ingot
            ]} />
        </>
    }]
];

declare const window: Window & {
    _t: NodeJS.Timeout;
};
export default function Home() {
    const [tooltip, setTooltip] = useState<HTMLDivElement | null>(null);
    const [text, setText] = useState<ReactNode>();

    useEffect(() => {
        const tooltipElement = document.querySelector('.mc-tooltip') as HTMLDivElement;
        if (tooltipElement) {
            setTooltip(tooltipElement);
            tooltipElement.style.display = 'none';
        }
    }, []);

    return (
        <>
            <main onMouseMove={(e) => {
                if (tooltip) {
                    tooltip.style.left = `${e.pageX}px`;
                    tooltip.style.top = `${e.pageY}px`;
                }
            }}>
                <h1>WebMC Recipes</h1>
                <div className="badges">
                    {badges.map((b, i) => (
                        <div className="badge-column" key={i}>
                            {b.map((badge, j) => (
                                <div className="mc-badge" key={j} onMouseEnter={() => {
                                    if (tooltip) {
                                        if (window._t) {
                                            clearTimeout(window._t);
                                        }
                                        tooltip.style.display = 'block';
                                        setText(badge.text);
                                    }
                                }} onMouseLeave={() => {
                                    if (tooltip) {
                                        window._t = setTimeout(() => {
                                            tooltip.style.display = 'none';
                                        }, 100);
                                    }
                                }} data-badge={badge.type || 'recipe_slot'}>
                                    <Image alt={"Icon"} src={badge.icon.high_url} width={32} height={32} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <Tooltip contentClassName="mc-text-sm">
                    {text}
                </Tooltip>
            </main>
        </>
    );
}
