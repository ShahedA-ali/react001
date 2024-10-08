import React, { forwardRef, useEffect, useState } from 'react';
const Input = forwardRef(function Input(
    {
        name,
        label,
        pattern,
        value,
        style,
        onChange,
        className,
        required,
        styleOnError,
        labelStyle,
        labelStyleError,
        wrapperStyle,
        wrapperClassName,
        children,
        ...other
    },
    ref
) {
    // State below is used for making the inputs react controlled components
    const [inputValue, setInputValue] = useState(value || '');
    // state below is boolean for indicating if value is matched the pattern prop then retruns true or else invalid
    const [inValid, setInValid] = useState(false);
    // here if label is passed then placeholder is set to empty
    if (label) {
        other.placeholder = '';
    }
    // this is for running onChange method added by props with the onChange in input elements already available
    function onInputChange(e) {
        if (typeof onChange === 'function') {
            onChange(e);
        }
        let val = e.target.value;
        setInputValue(val);
    }
    // this change styles of elements conditionally on inValid state and style from props are added to it too.
    if (inValid) {
        style = { ...style, ...styleOnError };
        labelStyle = { ...labelStyle, ...labelStyleError };
    } else {
        style = { ...style };
        labelStyle = typeof labelStyle === 'string' ? labelStyle : {...labelStyle };
    }
    // useEffect below states inValid for required prop passed
    useEffect(() => {
        if (required && !inputValue) {
            setInValid(true);
        } else {
            setInValid(false);
        }
    }, [inputValue, required]);
    // useEffect below states inValid for pattern prop pa
    useEffect(() => {
        if (pattern && inputValue) {
            try {
                if (
                    inputValue.match(pattern)[0] !==
                    inputValue.match(pattern).input
                ) {
                    setInValid(true);
                } else {
                    setInValid(false);
                }
            } catch (error) {
                setInValid(true);
            }
        }
    }, [inputValue, pattern]);
    return (
        <React.Fragment>
            {!label && (
                <div
                    className={`wrapper default-style p-0 ${wrapperClassName}`}
                    style={wrapperStyle}>
                    {children && children}
                    <input
                        value={inputValue}
                        className={`${
                            inValid ? 'wrong' : ''
                        } input w-full ${className}`}
                        style={style}
                        onChange={onInputChange}
                        pattern={pattern}
                        name={name}
                        ref={ref}
                        {...other}
                    />
                </div>
            )}
            {label && (
                <div
                    className={`wrapper ${wrapperClassName}`}
                    style={wrapperStyle}>
                    {/* {children && children} */}
                    <input
                        value={inputValue}
                        className={`${
                            inValid ? 'wrong' : ''
                        } default-style input w-full ${className}`}
                        style={style}
                        onChange={(e) => onInputChange(e)}
                        // pattern={'[A-Za-z]+'}
                        ref={ref}
                        name={name}
                        {...other}
                    />
                    <label
                        style={typeof labelStyle !== "string" ? labelStyle : {}}
                        className={`${inValid ? `wrong-label` : ''} label ${
                            inputValue ? 'label-value' : ''
                        } ${typeof labelStyle === "string" ? labelStyle : ''}`}>
                        {label}
                    </label>
                </div>
            )}
        </React.Fragment>
    );
});

export default Input;