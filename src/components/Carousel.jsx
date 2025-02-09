import "./Carousel.css"

export default function Carousel() {
    return (
        <div className="carouselSection">
            <div className="carouselTitle">
                <div className="carouselTitleText">
                    Batch of '20
                </div>
                <div className="maindots">
                    <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5625 19.6322C5.69226 19.6322 4.85766 19.3131 4.24231 18.7452C3.62695 18.1773 3.28125 17.4071 3.28125 16.6039C3.28125 15.8008 3.62695 15.0305 4.24231 14.4626C4.85766 13.8947 5.69226 13.5757 6.5625 13.5757C7.43274 13.5757 8.26734 13.8947 8.88269 14.4626C9.49805 15.0305 9.84375 15.8008 9.84375 16.6039C9.84375 17.4071 9.49805 18.1773 8.88269 18.7452C8.26734 19.3131 7.43274 19.6322 6.5625 19.6322ZM17.5 19.6322C16.6298 19.6322 15.7952 19.3131 15.1798 18.7452C14.5645 18.1773 14.2188 17.4071 14.2188 16.6039C14.2188 15.8008 14.5645 15.0305 15.1798 14.4626C15.7952 13.8947 16.6298 13.5757 17.5 13.5757C18.3702 13.5757 19.2048 13.8947 19.8202 14.4626C20.4355 15.0305 20.7812 15.8008 20.7812 16.6039C20.7812 17.4071 20.4355 18.1773 19.8202 18.7452C19.2048 19.3131 18.3702 19.6322 17.5 19.6322ZM28.4375 19.6322C27.5673 19.6322 26.7327 19.3131 26.1173 18.7452C25.502 18.1773 25.1562 17.4071 25.1562 16.6039C25.1562 15.8008 25.502 15.0305 26.1173 14.4626C26.7327 13.8947 27.5673 13.5757 28.4375 13.5757C29.3077 13.5757 30.1423 13.8947 30.7577 14.4626C31.373 15.0305 31.7188 15.8008 31.7188 16.6039C31.7188 17.4071 31.373 18.1773 30.7577 18.7452C30.1423 19.3131 29.3077 19.6322 28.4375 19.6322Z" fill="#8B8A88"/>
                    </svg>
                </div>
            </div>
            <div className="seniorImage">
                <img src="/sample.png" alt="sample" className="seniorImg"/>
            </div>
            <div className="seniorInfo">
                <div className="seniorDetails">
                    <div className="seniorName">Prateek Kashyap</div>
                    <div className="seniorVertical">Front-End</div>
                </div>
                <div className="verifyTick">
                    <div className="tickCircle">
                    <svg width="34" height="34" className="tick" viewBox="0 0 34 34" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9997 0.333496C26.2043 0.333496 33.6663 7.79541 33.6663 17.0002C33.6663 26.2048 26.2043 33.6668 16.9997 33.6668C7.79492 33.6668 0.333008 26.2048 0.333008 17.0002C0.333008 7.79541 7.79492 0.333496 16.9997 0.333496ZM22.3658 11.9496L14.9163 19.399L11.6336 16.1163C11.1454 15.6282 10.3539 15.6282 9.86579 16.1163C9.37764 16.6045 9.37764 17.3958 9.86579 17.884L14.0325 22.0507C14.5207 22.5388 15.312 22.5388 15.8002 22.0507L24.1335 13.7173C24.6217 13.2292 24.6217 12.4378 24.1335 11.9496C23.6453 11.4615 22.854 11.4615 22.3658 11.9496Z" fill="#784BD2"/>
                    </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}
