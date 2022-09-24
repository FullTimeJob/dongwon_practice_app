import React, { useEffect, useState } from "react"
import styled from "styled-components"

export default function Gyusik() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const temp = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", temp)
        return () => {
            window.removeEventListener("resize", temp)
        }
    }, [windowWidth])

    return (
        <STemp>
            <SBackground
                src={require("~/main_back.svg").default}
                windowwidth={windowWidth}
            />
            <SDiv0>
                <SDiv1>
                    <SCom>
                        <SComCom1>2022 하반기 동원그룹 신입사원모집</SComCom1>
                        <SComCom2>당신이 열어갈</SComCom2>
                        <SComCom3>새로움IN동원</SComCom3>
                        <SComCom4>9.20(화)~10.18(화)</SComCom4>
                        <SComCom5>지원 마감시까지</SComCom5>
                        <SComCom6>00:00:00</SComCom6>
                        <SComCom7>지원하기</SComCom7>
                    </SCom>
                </SDiv1>
                <SDiv2></SDiv2>
            </SDiv0>
        </STemp>
    )
}
const STemp = styled.div`
    width: 100%;
    height: ${() => window.innerHeight}px;
    background-color: transparent;
`
const SBackground = styled.img<{ windowwidth: number }>`
    position: absolute;
    width: ${({ windowwidth }) => windowwidth}px;
    z-index: -9999;
`
const SDiv0 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
const SDiv1 = styled.div`
    background-color: transparent;
    display: flex;
    width: 100%;
    height: 100%;
`
const SDiv2 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const SCom = styled.div`
    width: 100%;
    margin: 200px 150px 200px 250px;
`
const SComCom1 = styled.div`
    font-weight: bold;
    font-size: 18px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 14px;
    padding: 16px 0;
    color: #0d3566;
`
const SComCom2 = styled.div`
    font-weight: 300;
    font-size: 53px;
    margin-bottom: 14px;
    color: #348ee8;
`
const SComCom3 = styled.div`
    font-weight: 700;
    font-size: 55px;
    margin-bottom: 14px;
    color: #316cc7;
`
const SComCom4 = styled.div`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 14px;
`
const SComCom5 = styled.div`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 14px;
    color: #0d3566;
`
const SComCom6 = styled.div`
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 14px;
    color: #316cc7;
`
const SComCom7 = styled.button`
    height: 32px;
    width: 120px;
    font-weight: 700;
    font-size: 12px;
    color: #ffffff;
    background-color: #348ee8;
    border-radius: 30px;
    border: 0;
`
