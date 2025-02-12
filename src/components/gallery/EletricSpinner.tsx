import style from "./EletricSpinner.module.scss"

export default () => {
    return <div className={style.eletricSpinner}>
        {/* <svg className="filter" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <filter id="blurFilter">
                <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
                <feColorMatrix type="matrix" values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 19 -9"></feColorMatrix>
            </filter>
        </svg> */}

        <div className={style.demo}>
            <div className={style.rings}>
                <div className={style.rings}>
                    <div className={style.logo}>
                    </div>
                </div>
            </div>
        </div>
    </div>
}