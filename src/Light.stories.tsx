import type {Meta, StoryObj} from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light>={
    component: Light,
    title: "Light",
    tags: ['autodocs'],
    argTypes:{
        variant:{
            control:{type:'select'},
            options:['red','yellow','green']
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const green: Story ={
    args:{
        variant:'green'

    }
}

export const yellow: Story ={
    args:{
        variant:'yellow'

    }
}

export const red: Story ={
    args:{
        variant:'red'

    }
}

export const Grouped:Story={
    render:(_args)=><div
    style={{
        display:"flex",
        flexDirection:"column",
        gap:10,
        border:"1px solid black",
        width:"max-content",
        padding:10
    }}>
        <Light variant="red"/>
        <Light variant="yellow"/>
        <Light variant="green"/>
    </div>
}