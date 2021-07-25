import React from "react"
import Container from '@material-ui/core/Container'
import './Mission.scss'
// import TopImage from '../img/mission-top.jpg'
import TopImage from '../img/mission-top.svg'

const Mission = () => {
  return (
    <>
      <img src={TopImage} alt='mission' className='top-image'/>
      <Container maxWidth="md" className="mission">
        <div className="content">
          <h2>企業理念</h2>
          <div>
            <p>
              社員全員が、働く喜びを感じて幸せになれる会社を目指すと同時に、社会・お客様の発展に貢献できる存在で有り続けること
            </p>

            <h3>
              顧客志向のIT技術とITサービス
            </h3>

            <p>
              社会やお客様が今求めているものは何かを考え抜き、満足して頂ける製品・サービスを提供できるよう努力し続けます。
            </p>

            <h3>
              ともに働く人たち全員が幸せになれる会社
            </h3>

            <p>
              明るく楽しく、目標に向かって働く喜びを感じ、それを社員全員で共有することができる職場をつくります。自社の利益の追求のみではなく、社員全員、取引先の皆様が幸せになれる会社を目指します。
            </p>
          </div>
        </div>

        <div className="content">
          <h2>当社の強み</h2>
          <div>
            <p>
              当社の強みは、メルセデス・ベンツ日本様で培った、自動車部品のアフターセールスビジネスとそのシステムへの知識と、運用サービス開発力です。
            </p>

            <p>
              当社は、前身の個人事業期から、メルセデスベンツ日本様にて17年間、主体的にシステムの運用保守業務を請け負ってまいりました。
            </p>

            <p>
              13年間は、部品物流システムの運用保守をメインに行い、4年前より販売店サポートシステムの運用保守も行ってきました。
            </p>

            <p>
              上記運用保守サービス業務においては、運用対象のシステムやビジネスのみではなく、関連する多種多様なシステムとビジネスへの理解も必要となり、ビジネス、ITともに幅広い知識を有しております。
            </p>

            <p>
              また、メルセデスベンツ様においては、運用サービスのみでなく、Accessをはじめ様々なプラットフォームでのシステムの開発、ツールの開発、データベース設計も行ってまいりました。
            </p>

            <p>
              ここ数年は、物流業のお客様を中心に、電気工事業、製造業、EC運営業のお客様へ、IT化コンサルタント、システム・アプリケーション開発、運用保守サービスの提供をしております。
              また、ビッグデータ設計開発および運用サービスにも力を入れております。
            </p>

            <p>
              開発技術面においては、SAP、UNIX/AIX、AS/400(IBM)、Access、VB、Delphi、webアプリ、スマホアプリの開発力には特に自信がございます。
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Mission
