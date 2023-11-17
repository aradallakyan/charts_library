import React, { useRef } from "react";
import s from "./ui_components.module.css";
import Select from 'react-select';
import { AiOutlineClose } from "react-icons/ai";
import { toast } from 'react-toastify';
import ReactInputDateMask from "react-input-date-mask";

export const MyCard = (props) => {
    const { customStyles, onClick, cardTitle } = props;
    return <div className={s.myCard} style={customStyles} onClick={(e) => {
        if (typeof onClick === "function")
            onClick(e)
    }}>
        {cardTitle ? <MyChartTitle customStyles={{ fontWeight: "900" }}>{cardTitle}</MyChartTitle> : null}
        {props.children}
    </div>
};

export const MyModal = (props) => {
    const {
        customStyles,
        onClose,
        modalHeader,
        headerIcon,
        modalContentStyle,
        myHrStyle,
        headerStyle
    } = props;
    return <div style={customStyles} className={s.modal_background_wrapper}>
        <div style={modalContentStyle} className={s.modal_wrapper}>
            <div style={headerStyle} className={modalHeader ? s.modal_header_text : s.modal_header}>
                <div className={s.headerIconClose}>
                    {headerIcon && <div>{headerIcon}</div>}
                    {modalHeader && <div className={s.modalHeaderText}>{modalHeader}</div>}
                </div>
                <span onClick={onClose} style={{
                    cursor: "pointer"
                }}><AiOutlineClose strokeWidth="9" fill="rgb(194, 205, 232)" /></span>
            </div>
            <MyHr customStyles={myHrStyle}></MyHr>
            <div className={s.modal_content}>
                {props.children}
            </div>
        </div>
    </div>
};

export const MyInput = (props) => {
    const inputRef = useRef();
    const {
        inputKey,
        customStyles,
        type,
        onChange,
        label,
        icon,
        iconStyle,
        placeholder,
        value,
        autoFocus,
        ref,
        disabled,
        defaultValue,
        name,
        required,
        id
    } = props;
    return <div
        ref={ref}
        className={s.my_input_wrapper}>
        {label ? <div className={s.my_input_label}>{label}</div> : null}
        {icon ? <div className={s.inp_icon_div} onClick={() => {
            console.log(type)
        }} style={iconStyle}>{icon}</div> : null}
        <input
            id={id}
            name={name}
            // key={inputKey ? inputKey: new Date}
            ref={inputRef}
            required={required ? required : false}
            disabled={disabled}
            autoFocus={autoFocus}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            autoComplete="off"
            className={s.my_input}
            style={customStyles}
            type={type ? type : "text"}
            onChange={(e) => { typeof onChange === "function" && onChange(e.target.value) }}
        ></input>
    </div>
};

export const MyPartialDateInput = (props) => {
    const { onChange } = props;
    return <ReactInputDateMask className={s.my_input}
        onChange={(e) => {
            onChange(e)
        }}
        mask="dd/mm/yyyy"
        placeholder="dd/mm/yyyy"
        value="dd/mm/yyyy"
        showMaskOnHover={true}
    />
};

export const MyButton = (props) => {
    const { type, onClick, customStyles, disbled } = props;
    return <button
        disabled={disbled}
        style={customStyles}
        type={type}
        className={s.my_button}
        onClick={onClick}>{props.children}</button>
};

export const MyHr = (props) => {
    const { customStyles } = props;
    return <hr style={customStyles} className={s.my_hr}></hr>
};

export const MyCircleButton = (props) => {
    const { icon, isActive, onClick, customStyles } = props;
    return <div onClick={onClick} style={customStyles} className={!isActive ? s.circleBtn : s.activeCircleBtn}>{icon}</div>
};

export const MyRadioInput = (props) => {
    const { name, value, id, defaultChecked, label, onChange, labelStyle, checked } = props
    return <div style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
        minWidth: "20%"
    }}>
        <input className={s.my_radio_input} checked={checked} defaultChecked={defaultChecked} name={name} value={value} id={id} type="radio" onChange={(e) => {
            if (typeof onChange === "function")
                onChange(e)
        }} />
        {label ? <label
            htmlFor={id}
            className={s.myLabel}
            style={{
                cursor: "pointer",
                paddingBottom: "2px",
                paddingLeft: "8px",
                ...labelStyle
            }}>{label}</label> : null}
    </div>
};

export const MySelect = (props) => {
    const { options, selectorKey, placeholder, onChange, defaultValue, height, width, styleType, name, isMulti, isClearable, isDisabled } = props;
    const style = {
        menu: (provided) => {
            return {
                ...provided,
                width: width ? width : "15rem",
                fontSize: "15px",
                zIndex: 10000,
                cursor: "pointer",
                backgroundColor: "white",
                boxShadow: ".5px 3.5px 10px -1px #3A377733",
                borderRadius: "8px"
            }
        },
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#4AB2F1' : 'black',
            backgroundColor: "white",
            cursor: "pointer",
            ':active': {
                backgroundColor: ""
            },
            "&:hover": {
                color: "#4AB2F1"
            }
        }),
        control: () => ({
            display: "flex",
            width: width ? width : "15rem",
            height: height,
            cursor: "pointer",
            borderRadius: "6px",
            border: "1px solid #615EB126"
        }),

        singleValue: (provided) => {
            const color = '#314565';
            return { ...provided, color };
        }
    }

    const stylePure = {
        menu: (provided, state) => {
            return {
                ...provided,
                width: "9rem",
                fontSize: "15px",
                cursor: "pointer",
                zIndex: 10000,
                backgroundColor: "#F0F1F5",
                fontWeight: "500",
                boxShadow: "2.5px 5px 10px -1px #3A377733",
                borderRadius: "8px",
                color: "#314565"

            }
        },
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#4AB2F1' : 'black',
            backgroundColor: "white",
            zIndex: "1000000000",
            height: "2rem",
            cursor: "pointer",
            ':active': {
                backgroundColor: ""
            },
            "&:hover": {
                color: "#4AB2F1"
            }
        }),
        control: () => ({
            display: "flex",
            width: "9rem",
            cursor: "pointer",
            height: height
        }),

        singleValue: (provided) => {
            const color = '#314565';
            return { ...provided, color };
        }
    }

    return <div>
        <Select
            autoFocus={false}
            name={name}
            isMulti={isMulti}
            isDisabled={isDisabled}
            placeholder={placeholder}
            // key={selectorKey ? selectorKey : Math.random()}
            defaultValue={defaultValue}
            isClearable={isClearable}
            closeMenuOnSelect={!isMulti}
            isSearchable={true}
            styles={styleType === "stylePure" ? stylePure : style}
            options={options}
            onChange={(e) => {
                if (typeof onChange === "function") {
                    onChange(e)
                }
            }} />
    </div>
};

export const MyCheckBox = (props) => {
    const { customStyles, onClick, name, id, textLabel, defaultChecked, pointerEventsNone, checked, onChange, labelStyle } = props;
    return <div className={s.uiKitWrapper} style={{
        pointerEvents: pointerEventsNone && "none"
    }}>
        <div className={s.inputsDiv}>
            <label className={s.containerLabel}>
                <input
                    defaultChecked={defaultChecked}
                    id={id}
                    onClick={(e) => {
                        if (onClick) onClick(e);
                    }}
                    onChange={(e) => {
                        if (onChange)
                            onChange(e)
                    }}
                    checked={checked}
                    name={name}
                    type="checkbox"
                />
                <span className={s.checkmark} style={customStyles?.wrapper}></span>
            </label>
            <label htmlFor={id} className={s.myLabel} style={labelStyle}>{textLabel}</label>
        </div>
    </div>
};

export const MyTextArea = (props) => {
    const { customStyles, onChange, autoFocus } = props;
    return <textarea
        className={s.my_textarea}
        autoFocus={autoFocus}
        style={customStyles}
        onChange={(e) => {
            if (onChange)
                onChange(e)
        }} ></textarea>

};

export const notifyError = (text) => {
    toast.error(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    })
};

export const notifySuccess = (text) => {
    toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        zIndex: 999999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    })
};

export const MyLabel = (props) => {
    const { customStyles } = props;
    return <div className={s.myLabel} style={customStyles}>
        {props.children}
    </div>
};

export const MySwitch = () => {
    return <>
        <div className={s.uiKitButtonSwitch + " " + s.uiKitb2} id={s.button_13}>
            <input type="checkbox" className={s.uiKitSwitchCheckbox} onChange={(e) => {
                console.log(e)
            }} />
            <div className={s.uiKitSwitchKnobs}>
                <span></span>
            </div>
            <div className={s.uiKitLayerSwitch}></div>
        </div>


        {/*          Switch disabled         */}

        {/* <div className={s.uiKitButtonSwitch + " " + s.uiKitb2} id="button-13">
            <input type="checkbox" disabled className={s.uiKitSwitchCheckbox + " " + s.uiKitSwitchCheckboxDisabled} />
            <div className={s.uiKitSwitchKnobs}>
                <span></span>
            </div>
            <div className={s.uiKitLayerSwitch + " " + s.uiKitSwitchDisabledLayer}></div>
        </div> */}
    </>
};

export const MyChartTitle = (props) => {
    const { customStyles, onClick, id } = props;
    return <h4 className={s.my_chart_title} style={customStyles} id={id} onClick={() => {
        if (onClick)
            onClick(id)
    }}>{props.children}</h4>
};