import React, { useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import ListItem from './ListItem';
import ChipList from './ChipList';
import Chip from './Chip';

const MultiSelect = ({
    data: initialData = [],
    defaultItem,
    textField,
    value: propValue = [],
    className,
    required,
    wrapperClassName,
    childrenClassName,
    childrenStyle,
    selectedStyleClassName,
    btnClassName,
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
                return [...prevState, item];
            });
        }
    };
    const selectedValue = (
        <ChipList
            data={value}
            textField={textField}
            value={(i) => {
                setValue(i);
            }}
            valueField={textField}
            chip={(props) => {
                const {key, ...newProps} = props
                return <Chip size={'medium'} removable={true} {...newProps} key={key} />;
            }}></ChipList>
    );
    if (selectedValue.props.data.length > 0) {
        other.placeholder = ""
    }
    return (
        <React.Fragment>
            <ul
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`option-wrapper ${wrapperClassName}`}>
                <Input
                    className={` flex-1 ${className} relative ${
                        required && !value ? 'wrong' : ''
                    }`}
                    wrapperClassName={`flex-row ${selectedValue.props.data.length > 0 && 'pl-2'}`}
                    {...other}>
                    {selectedValue && selectedValue}
                    {value.length > 0 && (
                        <Button
                            onClick={() => setValue([])}
                            fillMode={'flat'}
                            className={`text-xl ${btnClassName} absolute z-10 right-0 text-gray-400 self-start font-bold hover:text-black order-2`}
                            >
                            &times;
                        </Button>
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
