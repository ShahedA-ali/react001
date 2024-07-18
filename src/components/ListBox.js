import React, { useEffect, useState } from "react";
import { keyGenerator, ObjectAllKeys } from ".";
import {
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaAngleLeft,
    FaAngleRight,
} from "react-icons/fa";
import Button from "./Button";

function ListBox({ className, data: initialData, headingsInOrder }) {
    const [data, setData] = useState();
    const [selection, setSelection] = useState();


    useEffect(() => {
        let result = []
        let i = 0
        initialData.map((catagory) => {
            for (const key in catagory) {
                console.log(key)
                result.push({[`array-${i}`]: catagory[key].map(item => [item, keyGenerator()])})
                i++;
            }
        }
        );

        setData(result)
    }, [])
    console.log(data)


    const select = (key) => {
        if (selection === key) {
            return setSelection();
        }
        setSelection(key);
    };

    const keys = ObjectAllKeys(initialData);
    let i = -1;

    const disableAllRight = () => {
        return !data[0]['array-0'].length
    }
    const shiftAllToRight = () => {
        const result = [...data]
        const allLeftArray = result[0]['array-0'].splice(0)
        console.log(allLeftArray)
        result[1]['array-1'].push(...allLeftArray)
        setData(result)
    }
    const disableRight = () => {
        if (!selection) {
            return true
        }
        else if (!data[0]['array-0'].find(item => item[1] === selection)) {
            return true
        }
        return false
    }
    const shiftToRigth = (key) => {
        const result = [...data]
        console.log(key)
        let i = result[0]['array-0'].findIndex(item => item[1] === key)
        const item = result[0]['array-0'][i]
        console.log(i)
        result[0]['array-0'].splice(i, 1)
        result[1]['array-1'].push(item)
        setData(result)
        console.log(data)
        // console.log(addToLeft)
    }
    const disableLeft = () => {
        if (!selection) {
            return true
        }
        else if (!data[1]['array-1'].find(item => item[1] === selection)) {
            return true
        }
        return false
    }
    const shiftToLeft = (key) => {
        const result = [...data]
        let i = result[1]['array-1'].findIndex(item => item[1] === key)
        const item = result[1]['array-1'][i]
        result[1]['array-1'].splice(i, 1)
        result[0]['array-0'].push(item)
        setData(result)
    }
    const disableAllLeft = () => {
        return !data[1]['array-1'].length
    }
    const shiftAllToLeft = () => {
        const result = [...data]
        const allRightArray = result[1]['array-1'].splice(0)
        console.log(allRightArray)
        result[0]['array-0'].push(...allRightArray)
        setData(result)
    }
    return (
        <>
            <div className="flex p-2 min-h-[200px] grow">
                {data && data.map((catagory) => {
                    i++;
                    return [
                        <>
                            {i > 0 && (
                                <div className="flex flex-col justify-center self-center h-full p-2 gap-1">
                                    <Button className={"shift-btn"} disabled={disableAllRight()} onClick={() => shiftAllToRight()}>
                                        <FaAngleDoubleRight className="align-middle" />
                                    </Button>
                                    <Button className={"shift-btn"} disabled={disableRight()} onClick={() => shiftToRigth(selection)}>
                                        <FaAngleRight className="align-middle" />
                                    </Button>
                                    <Button className={"shift-btn"} disabled={disableLeft()} onClick={() => shiftToLeft(selection)}>
                                        <FaAngleLeft className="align-middle" />
                                    </Button>
                                    <Button className={"shift-btn"} disabled={disableAllLeft()} onClick={() => shiftAllToLeft()}>
                                        <FaAngleDoubleLeft className="align-middle" />
                                    </Button>
                                </div>
                            )}
                        </>,
                        <div key={keyGenerator()}>
                            <h2 className="text-lg mb-0">{headingsInOrder[i] || keys[i]}</h2>
                            <div className="border border-gray-300 border-solid rounded-sm overflow-y-auto h-full min-w-[200] w-48">
                                {catagory['array-' + [i]].map((item) => (
                                    <div key={item[1]} className={`cursor-pointer p-2 hover:bg-gray-200 ${selection === item[1] && 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => select(item[1])}>{item[0]}</div>
                                ))}
                            </div>
                        </div>,
                    ];
                })}
            </div>
        </>
    );
}

export default ListBox;