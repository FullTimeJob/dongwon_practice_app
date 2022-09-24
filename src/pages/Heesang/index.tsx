import React, { useEffect, useState } from "react"
import styled from "styled-components"

export default function Heesang() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth) //useState 화면 최적화에 사용한다 > 통쨰로 외우자 const[이름,set이름]
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
                        <SComCom1>2022 하반기 동원그룹 신입사원 모집</SComCom1>
                        <SComCom2>당신이 열어갈</SComCom2>
                        <SComCom3>새로움 IN동원</SComCom3>
                        <SComCom4>9.20 (화) ~ 10.10(화)</SComCom4>
                        <SComCom5>지원 마감시까지</SComCom5>
                        <SComCom6>00:00:00</SComCom6>
                        <SComCom7>지원하기</SComCom7>
                    </SCom>
                </SDiv1>
                <SDiv2>왕</SDiv2>
            </SDiv0>
        </STemp>
    )
}
const STemp = styled.div`
    background-color: transparent;
    height: ${() => window.innerHeight}px;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const SBackground = styled.img<{ windowwidth: number }>`
    position: absolute;
    width: ${({ windowwidth }) => windowwidth}px;
    z-index: -9999;
` //함수의 파라미터를 받는다 {이름: 데이터타입} 이것도 순서를 그냥 외워야된다
const SDiv0 = styled.div`
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
const SDiv1 = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    height: 100%;
`
const SDiv2 = styled.div`
    background-color: transparent;
    display: flex;
    height: 100%;
    width: 100%;
`
const SCom = styled.div`
    background-color: transparent;
    width: 100%;
    margin: 200px 100px 200px 250px;
    padding: 0 0 0 200px;
`
const SComCom1 = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #0d3566;
    border-top: 1px solid #0d3566;
    border-bottom: 1px solid #0d3566;
    padding: 8px 0;
    margin: 0 0 14px 0;
`
const SComCom2 = styled.div`
    font-size: 53px;
    font-weight: 300;
    color: #348ee8;
    margin: 0 0 3px 0;
`
const SComCom3 = styled.div`
    font-size: 55px;
    font-weight: 700;
    color: #316cc7;
    margin: 0 0 16px 0;
`
const SComCom4 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #0d3566;
    margin: 0 0 47px 0;
`
const SComCom5 = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #0d3566;
    margin: 0 0 8px 0;
`
const SComCom6 = styled.div`
    font-size: 36px;
    font-weight: 700;
    color: #316cc7;
    margin: 0 0 24px 0;
`
const SComCom7 = styled.button`
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
    border: 0;
    width: 120px;
    height: 32px;
    background-color: #316cc7;
    border-radius: 9999px;
`
