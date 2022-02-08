import type { NextPage } from 'next';
import Image from "next/image";
import TwoPhone from "public/twoPhone.png";
import NewStep01 from "public/new-step1.png";
import NewStep02 from "public/new-step2.png";
import NewStep03 from "public/new-step3.png";
import style from "style/home.module.css";
import NavBar from "components/blog/NavBar";
import Footer from "components/blog/Footer";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div>
        <div className={style.backgroundFull}>
        <div className={style.backgroundUpper}>
          <NavBar /> 
          <Box sx={{ height: "105px"}}/>
            <div className={style.page + " " + style.first}>
                <div className={style.pageRight}>
                    <div className={style.phone}>
                        <div style={{minHeight: "563px", minWidth: "279px"}}
                        />
                    </div>
                </div>
                <div className={style.pageLeft}>
                    <div className={style.video}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9Liu9I_hb8M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className={style.buttons}>
                        <a className={style.resetATag} href="https://apps.apple.com/tw/app/ainimal-%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E7%A4%BE%E7%BE%A4%E9%A4%8A%E6%88%90/id1463977934">
                            <div className={style.iosDownloadButton}>
                            </div>
                        </a>
                        <a className={style.resetATag} href="https://play.google.com/store/apps/details?id=ainimal.io.pwa">
                            <div className={style.androidDownloadButton}>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.page + " " + style.second}>
                <div className={style.chatacteristicBlockContainer}>
                    <div className={style.characteristicBlock}>
                        <div className={style.characteristicBlockHeader}>
                            AI 性格分析
                        </div>
                        <div className={style.characteristicBlockContent}>
                            用AI分析使用者性格和軟性特質，以此幫助使用者配對到最契合的人
                        </div>
                    </div>
                    <div className={style.characteristicBlock}>
                        <div className={style.characteristicBlockHeader}>
                            話題延展性分析
                        </div>
                        <div className={style.characteristicBlockContent}>
                            幫助不擅聊天的使用者，分析他聊天的話題延展性，給予評分及回饋
                        </div>
                    </div>
                </div>
                    <div className={style.chatacteristicBlockContainerComputer}>
                        <Image src={TwoPhone}  height="400px" width="400px" alt="two-phone" />
                    </div>
                <div className={style.chatacteristicBlockContainer}>
                    <div className={style.characteristicBlock}>
                        <div className={style.characteristicBlockHeader}>
                            互動遊戲
                        </div>
                        <div className={style.characteristicBlockContent}>
                            藉由有趣的互動遊戲，在過程中進一步了解對方，增進聊天話題，打破初識的尷尬藩籬
                        </div>
                    </div>
                    <div className={style.characteristicBlock}>
                        <div className={style.characteristicBlockHeader}>
                            寵物養成
                        </div>
                        <div className={style.characteristicBlockContent}>
                            透過寵物代表使用者形象和對方互動，讓聊天有趣無壓力<br />
                            寵物具聊天回話功能以及餵食等許多互動機制
                        </div>
                    </div>
                </div>
                    <div className={style.chatacteristicBlockContainerMobile}>
                        <Image src={TwoPhone} alt="two-phone" />
                    </div>
            </div>
        </div>
        <div className={style.backgroundMiddle}>
            <div className={style.page + " " + style.third}>
                <div className={style.teachingBlockTitle}>
                    配對流程
                </div>
                <div className={style.teachingBlock}>
                    <div className={style.teachingBlockWord}>
                        <div className={style.teachingBlockStep}>
                            STEP 1
                        </div>
                        <div className={style.teachingBlockHeader}>
                            和你的寵物聊天
                        </div>
                        <div className={style.teachingBlockContent}>
                            使用者說的話經自然語言處理，藉由寵物回話分析使用者軟性特質。
                        </div>
                    </div>
                    <div className={style.teachingBlockImg01}>
                        <Image src={NewStep01} width="390px" height="300px" alt="new-step1" />
                    </div>
                </div>
                <div className={style.teachingBlock}>
                    <div className={style.teachingBlockWord}>
                        <div className={style.teachingBlockStep}>
                            STEP 2
                        </div>
                        <div className={style.teachingBlockHeader}>
                            分析性格及軟性特質
                        </div>
                        <div className={style.teachingBlockContent}>
                            使分為浪漫、狂野、睿智、活力、佛系五種特質，了解自己是什麼樣的人也能透過更多的對話轉變為不同特質。
                        </div>
                    </div>
                    <div className={style.teachingBlockImg02}>
                       <Image src={NewStep02} width="310px" height="350px"  alt="new-step2" />
                    </div>
                </div>
                <div className={style.teachingBlock}>
                    <div className={style.teachingBlockWord}>
                        <div className={style.teachingBlockStep}>
                            STEP 3
                        </div>
                        <div className={style.teachingBlockHeader}>
                            配對合適人選
                        </div>
                        <div className={style.teachingBlockContent}>
                            每日有抽卡機會，可認識特定條件（性別、性格、寵物）的交友對象。
                        </div>
                    </div>
                    <div className={style.teachingBlockImg03}>
                        <Image src={NewStep03} width="410px" height="370px"  alt="new-step3" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className={style.fifth}>
            <div className={style.teamContent}>
                各位飼主好:<br />
                我們是AInimal，和您一樣喜歡聊天交朋友。
                AInimal致力於打造有別於一般市面上，更特別的配對機制與更特殊的社群交友體驗。<br />
                人工智慧(AI)及大數據(Big Data)，是我們提出的解藥，翻轉大眾對交友軟體的印象。
                我們的軟體利用人格特質分析，搭配寵物養成，結合遊戲，與其他飼主們聊天互動。
                期待每位飼主，都能在AInimal找到最契合的人。
            </div>
        </div>
        <div className={style.Page + " " + style.Sixth}>
            <div className={style.newsBlock}>
                <div className={style.newsBlockTitle}>
                    <div className={style.newsBlockTitleWord}>相關報導</div>
                </div>
                <div className={style.newsBlockContentBlock}>
                    <a className={style.resetATag} href="https://reurl.cc/1QnVj9">
                        <div className={style.newsBlockContentBlockTitle}>
                            2019-02-11 13:57 中國日報 程炳璋
                        </div>
                        <div className={style.newsBlockContentBlockContent}>
                            成大電機所畢業生一手打造新人工智慧交友APP 成大上千學生使用
                        </div>
                    </a>
                </div>
                <div className={style.newsBlockContentBlock}>
                    <a className={style.resetATag} href="https://reurl.cc/24x9M9">
                        <div className={style.newsBlockContentBlockTitle}>
                            2019-12-16 10:45 經濟日報 張傑
                        </div>
                        <div className={style.newsBlockContentBlockContent}>
                            首款AI大數據社群交友軟體，AInimal席捲校園
                        </div>
                    </a>
                </div>
            </div>
            <div className={style.prizeBlock}>
                <div className={style.prizeBlockHeader}>
                    獲獎紀錄
                </div>
                <div className={style.prizeBlockContent}>
                    2019 智慧稱活創業競賽 全國第二名 &#38; 校長創新獎<br />
                    2019 NCKU 圓夢計畫 人氣獎第三名<br />
                    2019 美國新創海外培訓計畫 入選團隊<br />
                    2019 AUCC 創業培訓營 入選團隊<br />
                    2018 NCKU Startup Festival
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home
