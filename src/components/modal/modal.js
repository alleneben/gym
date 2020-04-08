import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";

import formstyles from '../../asset/scss/forms.module.scss'
import styles from './modal.module.scss';



const Modal = (props) => {

    const { status, onhide, children, title,handleSubmit,submitting } = props


    let modalclass = status ? 'show' : 'hide';

    const handlemousedown = e => {
        onhide()
        e.stopPropagation(); 
    }

    return(
        
            <div  className={`${styles.overlaycontainer} ${styles[modalclass]}`}>
                <div className={`${styles.content} ${styles[modalclass]}` }>
                    <div className={styles.header}>
                        <div>
                            <h4 className={styles.title}>
                                <FontAwesomeIcon
                                style={{ fontSize: "20px", marginRight: ".3rem" }}
                                icon={faMoneyBillAlt}
                                />{" "} { title }
                            </h4>
                            <span className={styles.lead}></span>
                        </div>
                        <span onClick={handlemousedown} className={styles.close} onMouseDown={handlemousedown}>
                            &times;
                        </span>
                    </div>
                    <div className={styles.modalbody}>
                        { children }
                    </div>
                    <div className={styles.footer}>
                        <button className={formstyles.button} onMouseDown={handlemousedown}>Cancel</button>
                        <button className={formstyles.button} onClick={handleSubmit} disabled={submitting}>Submit</button>
                    </div>
                </div>
            </div>
        
    )
}


export default Modal;