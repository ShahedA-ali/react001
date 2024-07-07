import React, { useEffect, useState } from 'react';
import Chip from './Chip';
import ChipList from './ChipList';
import Input from './Input';
import ListItem from './ListItem';

const MultiSelect = ({
    data: initialData = [],
    defaultItem,
    textField,
    value: propValue = [],
    className,
    required,
    childrenClassName,
    childrenStyle,
    selectedStyleClassName,
    ...other
}) => {
    const [data, setData] = useState(initialData);
    const [value, setValue] = useState([...propValue]);

    useEffect(() => {
        if (other.onChange) {
            other.onChange(value);
        }
    });
    const selection = (item) => {
        const newData = value.filter((e) => {
            if (textField) {
                return JSON.stringify(e) === JSON.stringify(item);
                
            } else {
                
                return JSON.stringify(e.text) === JSON.stringify(item.text);
            }
        });
        if (newData.length !== 0) {
            const newData = value.filter((e) => {
                if (textField) {
                    
                    return JSON.stringify(e) !== JSON.stringify(item);
                } else {
                    return JSON.stringify(e.text) !== JSON.stringify(item.text);
                    
                }
            });
            setValue(newData);
        } else {
            setValue((prevState) => {
                console.log(prevState);
                return [...prevState, item];
            });
        }
    };
    console.log(value, 'shahd')
    const selectedValue = (
        <ChipList
            data={value}
            textField={textField}
            value={(i) => {
                setValue(i);
            }}
            valueField={textField}
            chip={(props) => {
                return <Chip size={'medium'} removable={true} {...props} />;
            }}></ChipList>
    );
    return (
        <React.Fragment>
            <ul
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`option-wrapper`}>
                <Input
                    className={` flex-1 ${className} ${
                        required && !value ? 'wrong' : ''
                    }`}
                    wrapperClassName={`flex-row`}
                    {...other}>
                    {selectedValue && selectedValue}
                    {value.length > 0 && (
                        <span
                            onClick={() => setValue([])}
                            className={` text-xl text-gray-400 px-1 self-start cursor-pointer font-bold hover:text-black order-2 icon `}>
                            &times;
                        </span>
                    )}
                </Input>
                <div className="div">
                    <ListItem
                        selectedStyleClassName={selectedStyleClassName}
                        className={childrenClassName}
                        style={childrenStyle}
                        data={data}
                        textField={textField}
                        selected={value}
                        value={(item) => {textField ? selection({...item}) : selection({ text: item })}}
                    />
                </div>
            </ul>
        </React.Fragment>
    );
};

export default MultiSelect;
