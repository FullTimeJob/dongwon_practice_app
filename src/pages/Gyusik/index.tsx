import { color } from "d3"
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
    <Smother>
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
    
        <STemp2>
            <SPart1>채용공고</SPart1>
            <SPart2>
                <SDom>
                    <SDomDom1>지원방법</SDomDom1>
                    <SDomDom2>
                        <SDomDomDom1>접수기간</SDomDomDom1>
                        <SDomDomDom2>2022.09.20(화)~2022.10.18(화) 14:00까지</SDomDomDom2>
                    </SDomDom2>
                    <SDomDom3>
                        <SDomDomDom3>접수방법</SDomDomDom3>
                        <SDomDomDom4>동원그룹 채용사이트(careers.dongwon.com)접속 후 온라인지원</SDomDomDom4>
                    </SDomDom3>
                    <SDomDom4>
                        <SDomDomDom5>결과확인</SDomDomDom5>
                        <SDomDomDom6>동원그룹 채용사이트(careers.dongwon.com)접속 후 마이페이지에서 확인</SDomDomDom6>
                    </SDomDom4>
                    <SDomDom5>지원자격</SDomDom5>
                    <SDomDom6>
                        <SDomDomDom7>기졸업자 및 2023년 2월 졸업예정이신분</SDomDomDom7>
                        <SDomDomDom8>병역면제 혹은 병역을 마친 분, 해외출장에 결격사유가 없는 분</SDomDomDom8>
                        <SDomDomDom9>최종 합격자 발표 이후 즉시 근무가 가능한 분</SDomDomDom9>
                        <SDomDomDom10>국가등록장애인 및 국가보훈대상자는 관계법령에 대해 우대</SDomDomDom10>
                    </SDomDom6>
                    <SDomDom7>전형별 세부사항</SDomDom7>
                    <SDomDom8>
                        <SDomDom9>
                            <SDomDomDom11 
                                src={require("~/_R001.svg").default} />
                            <SDomDomDom12
                                src={require("~/chevron-right.png").default}/>
                            <SDomDomDom13
                                src={require("~/detail-img-2.svg").default}/>
                            <SDomDomDom14
                                src={require("~/chevron-right.png").default}/>
                            <SDomDomDom15 
                                src={require("~/detail-img-3.svg").default}/>
                            <SDomDomDom16
                                src={require("~/chevron-right.png").default}/>
                            <SDomDomDom17
                                src={require("~/detail-img-4.svg").default}/>
                            <SDomDomDom18
                                src={require("~/chevron-right.png").default}/>
                            <SDomDomDom19
                                src={require("~/detail-img-5.svg").default}/>
                            <SDomDomDom20
                                src={require("~/chevron-right.png").default}/>
                        </SDomDom9>
                        <SDomDom10>
                            <SDomDomDom21>서류전형</SDomDomDom21>
                            <SDomDomDom22>필기전형</SDomDomDom22>
                            <SDomDomDom23>1차 면접전형</SDomDomDom23>
                            <SDomDomDom24>2차 면접전형</SDomDomDom24>
                            <SDomDomDom25>최종합격</SDomDomDom25>
                        </SDomDom10>
                        <SDomDom11>
                            <SDomDomDom26>9.20-10.18</SDomDomDom26>
                            <SDomDomDom27>10월 중</SDomDomDom27>
                            <SDomDomDom28>11월 중</SDomDomDom28>
                            <SDomDomDom29>12월 초</SDomDomDom29>
                            <SDomDomDom30>12월 말</SDomDomDom30>
                        </SDomDom10>
                    </SDomDom8>
                </SDom>
            </SPart2>
        </STemp2>
    )
}
</Smother>


const Smother = styled.div`
     width: 100%;
    height: ${() => window.innerHeight}px;
    background-color: transparent;
`

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
const STemp2 = styled.div`
    width: 100%;
    height: ${() => window.innerHeight}px;
    background-color: #0B7DDB;
`
const SPart1 = styled.div`
    font-weight: bold;
    font-size: 24px;
    margin: 10px;
    padding: 16px 0;
    color:#ffffff;
    width: 159px;
    Height: 48px;
    margin: 50px 1501px 40px 260px;
`
const SPart2 = styled.div`
    border-top: 4px #0d3566;
    border-bottom: 4px #0d3566;
    Width: 100%;
    Height: 100%;
    margin: 0 260px; 
    background-color: #FFFFFF;
    `
const SDom = styled.div`
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 126px 170px 164px 68px;

`

const SDomDom1 = styled.div`
    width: 205px;
    height: 72px;
    align-items: left;
    background-color: #0d3566;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 36px;
    border-radius: 50px;
`
const SDomDom2 = styled.div`
    width: 100%;
    height: 100%;
    margin: 16px 170px 160 px 12px;

`
const SDomDomDom1 = styled.div`
    width: 17%;
    height: 100%;
    font: bold;
    font-size: 32px;
    color: #0D3566;
    border-right: 1px;
    border-right-color: #0D3566; 
`

const SDomDomDom2 = styled.div`
    width: 84%;
    height: 100%;
    font: bold;
    font-size: 32px;
    color: #0D3566;
`
const SDomDom3 = styled.div`
    width: 100%;
    height: 100%;
    margin: 16px 170px 160 px 12px;

`
const SDomDomDom3 = styled.div`
    width: 17%;
    height: 100%;
    font: bold;
    font-size: 32px;
    color: #0D3566;
    border-right: 1px;
    border-right-color: #0D3566; 
`
const SDomDomDom4 = styled.div`
    width: 84%;
    height: 100%;
    font: bold;
    font-size: 32px;
    color: #0D3566;
`
const SDomDom4 = styled.div`
    width: 100%;
    height: 100%;
    margin: 16px 170px 160 px 12px;

`
const SDomDomDom5 = styled.div`
    width: 17%;
    height: 100%;
    font: bold;
    font-size: 32px;
    color: #0D3566;
    border-right: 1px;
    border-right-color: #0D3566; 
`
const SDomDomDom6 = styled.div`
    width: 84%;
    height: 100%;
    font: bold;
    font-size: 32px;
    color: #0D3566;
`
const SDomDom5 = styled.div`
    width: 205px;
    height: 72px;
    align-items: left;
    background-color: #0d3566;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 36px;
    border-radius: 50px;
`
const SDomDom6 = styled.div`
    margin: 28px 615px 160px 72px;
    width: 100%;
    height: 100%;
    background-color: transparent;
`

const SDomDomDom7 = styled.div`
    font-size: 32px;
    color: #0D3566;
    font: bold;
    text-align: left;

`

const SDomDomDom8 = styled.div`
    font-size: 32px;
    color: #0D3566;
    font: bold;
    text-align: left;
`
const SDomDomDom9 = styled.div`
    font-size: 32px;
    color: #0D3566;
    font: bold;
    text-align: left;
`
const SDomDomDom10 = styled.div`
    font-size: 32px;
    color: #0D3566;
    font: bold;
    text-align: left;
`
