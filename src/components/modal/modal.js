import React, { useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";


import styles from './modal.module.scss';
import formstyles from '../../asset/scss/forms.module.scss'



const Modal = (props) => {

    const { status, onhide, children, title } = props


    let modalclass = status ? 'show' : 'hide';

    const handlemousedown = e => {
        onhide()
        e.stopPropagation();
        
    }

    return(
        <div>
            <div onMouseDown={handlemousedown} className={`${styles.overlaycontainer} ${styles[modalclass]}`}>
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
                        <span onClick={handlemousedown} className={styles.close}>
                            &times;
                        </span>
                    </div>
                    <div className={styles.modalbody}>
                        { children }
                    </div>
                    <div className={styles.footer}>
                        <button className={formstyles.button}>Cancel</button>
                        <button className={formstyles.button}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal;