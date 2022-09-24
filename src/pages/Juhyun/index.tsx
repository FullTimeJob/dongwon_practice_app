import React, { useEffect, useState } from "react"
import styled from "styled-components"

export default function Juhyun() {
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
                        <SComSCom1>
                            2022 하반기 동원그룹 신입사원 모집
                        </SComSCom1>
                        <SComSCom2>당신이 열어갈</SComSCom2>
                        <SComSCom3>새로운 IN동원</SComSCom3>
                        <SComSCom4>9.20(화) - 10.18(화)</SComSCom4>
                        <SComSCom5>지원 마감시까지</SComSCom5>
                        <SComSCom6>00:00:00</SComSCom6>
                        <SComSCom7>지원하기</SComSCom7>
                    </SCom>
                </SDiv1>
                <SDiv2>z11</SDiv2>
            </SDiv0>
        </STemp>
    )
}
const STemp = styled.div`
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
    margin: 200px;
`
const SComSCom1 = styled.div`
    font-size: 18px;
    font-weight: bold;
    border-top: 1px solid #0d3566;
    border-bottom: 1px solid #0d3566;
    padding: 16px 0px;
    margin-bottom: 14px;
    color: #0d3566;
`
const SComSCom2 = styled.div`
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 2.5px;
    color: #348ee8;
`
const SComSCom3 = styled.div`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 31px;
    color: #316cc7;
`

const SComSCom4 = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 46.5px;
    color: #0d3566;
`
const SComSCom5 = styled.div`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #0d3566;
`
const SComSCom6 = styled.div`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #316cc7;
`
const SComSCom7 = styled.button`
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
    width: 120px;
    height: 32px;
    background-color: #348ee8;
    border-radius: 30px;
    border: 0;
`
