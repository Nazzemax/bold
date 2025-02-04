import React from "react";
import "./DesignSupport.scss";

const DesignSupport: React.FC = () => {
    return (
        <div className="container">
            <div className="design-support">
                <div className={"design-text"}>
                    <h1 className={"text-h1"}>Дизайн-поддержка</h1>
                    <h2 className={"text-h2"}>ВАШ ВНЕШНИЙ ОТДЕЛ ДИЗАЙНА</h2>
                </div>
                <div className={"design-p"}>
                    <p className={"text-p"}>Мы регулярно обновляем визуальные материалы вашего бренда, чтобы он оставался современным и привлекательным.
                        <br/>
                        <br/>
                        Наши эксперты быстро адаптируют дизайн под новые тренды и платформы, поддерживая интерес аудитории.
                    </p>
                </div>
            </div>
            <div className={"design-support2"}>
                <div className={"design-support3"}>
                    <div className={"design-text2"}>
                        <img className={"design-icon"} src="/designIcon.svg" alt="icon"/>
                        <h2 className={"text-h2"}>Наши эксперты</h2>
                        <p className={"text-p"}>быстро адаптируют дизайн под новые тренды и платформы, поддерживая интерес аудитории. С нами ваш бренд всегда выделяется и эффективно взаимодействует с клиентами.
                        </p>
                    </div>
                </div>
                <div className={"design-img"}>
                    <img className={"design-img2"} src="/design.svg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default DesignSupport;