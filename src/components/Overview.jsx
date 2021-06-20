import React from "react"
import Container from '@material-ui/core/Container'
import './Overview.scss'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Grid from '@material-ui/core/Grid'
import BlurOnIcon from '@material-ui/icons/BlurOn'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'


const Mission = () => {
  const histories = [
    {date: '1996年10月', text: '愛知県豊橋市にて現社長が個人事業としてソフトウェアの受託開発、システムの運用保守を開始。メルセデスベンツ豊橋事業所にて、倉庫システム、自動倉庫システム、VPCシステム、ネットワークサポート、PCサポートの業務を行う'},
    {date: '2007年2月', text: '株式会社デベロップアイティを愛知県豊橋市に設立'},
    {date: '2007年11月', text: 'メルセデスベンツ日本株式会社の部品物流システム運用保守サービスを受託'},
    {date: '2009年1月', text: '資本金を1000万円に増資'},
    {date: '2009年9月', text: 'メルセデスベンツ日本株式会社の販売店向け部品画像検索サイト構築・運営開始'},
    {date: '2009年11月', text: 'メルセデスベンツ日本株式会社の販売店サポートシステム運用保守サービスを受託'},
    {date: '2011年3月', text: 'メルセデスベンツ日本株式会社豊橋事業所の習志野事業所への移転にともない、東京事務所（六本木ファーストビル）に拠点を移す'},
    {date: '2014年10月', text: '東京都中央区築地に東京事務所開設'},
  ]

  const companyTableRows = [
    {name: '会社名', value: '株式会社デベロップアイティ<br/>ＤｉＴ（ディーアイティ）'},
    {name: '代表者名', value: '代表取締役社長　南　秀一'},
    {name: '設立年月', value: '平成19年2月（2007年2月）'},
    {name: '資本金', value: '1,000万'},
    {name: '従業員', value: '8名'},
    {name: '事業内容', value: 'コンピュータシステム運用の設計・サービス<br/>コンピュータシステム・ソフトウェアの開発業<br/>IT化のコンサルティング業<br/>コンピュータ技術者の派遣業'},
    {name: ' 許認可など', value: '特定労働者派遣事業　（特23-302506）'},
    {name: '所在地', value: '豊橋本社　：441-3302 愛知県豊橋市杉山町いずみが丘18-16<br/>東京事務所：104-0045 東京都中央区築地2-14-6 LXS築地 602'},
    {name: '取引先銀行', value: '岡崎信用金庫　豊橋支店'},
  ]

  return (
    <Container maxWidth="md" className="overview">
      <div className='content'>
        <h2>ご挨拶</h2>
        <div>
          <p>
            ここ数年、我々の業界の状況は大きく変わってきました。国内では業界全体が成長し続けた時代が終わり、優秀なエンジニアが多く集まる、インドや中国をはじめとするアジア諸国、世界市場を舞台にした競争が激しくなっています。
          </p>

          <p>
            ですが私たちはこの状況をチャンスだと考えています。
          </p>

          <p>
            我々の業界も下請け、孫請けは当たり前の世界です。中小零細企業が今までと同じように、上流から流れてくる仕事だけを頼りにしていてはこれからの競争には勝てません。
          </p>

          <p>
            これからは、企業規模に関係なく、高品質で高付加価値のシステムやサービスを、エンドユーザーに直接提供できる企業だけが生き残ることができると考えています。
          </p>

          <p>
            私たちはそれを目指し、成長していきたいと思っています。
          </p>

          <p>
            そして、その実現にもっとも大切なのは人だと考えています。技術や知識の偏重になりがちなこの業界ですが、お客様のニーズをシステムやサービスに組み込み、形にするのは我々、人の仕事です。
          </p>

          <p>
            お客様からの情報を正しく理解し、ニーズにあった、より品質の高いシステム・サービスを提供できるかどうかは、技術や知識だけでなく、それに携わる人のモチベーションや、誠実さ、責任感も重要になってくると考えています。
          </p>

          <p>
            お客様から求められる力・価値でもっとも重要なひとつはこうした人間力だと思っています。
          </p>

          <p>
            デベロップアイティは、そんな技術力だけでなく人間力も備えた人が集まり、高品質で高付加価値のシステム、サービスを提供し続け、お客様のニーズに迅速かつ的確にお応えしてまいりたいと思っています。
          </p>

          <p>
            これからのデベロップアイティをどうぞよろしくお願い申し上げます。
          </p>

          <p>
            株式会社デベロップアイティ<br/>
            代表取締役　南秀一
          </p>
        </div>
      </div>
      <div className='content history'>
        <h2>沿革</h2>
        <Grid item xs={12} md={10}>
          <List dense={false}>
              {histories.map((history, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <BlurOnIcon style={{ color: '#58A6F2'}}/>
                  </ListItemIcon>
                  <div className='item-text-content'>
                    <p className='date'>{history.date}</p>
                    <p className='text'>{history.text}</p>
                  </div>
                </ListItem>
              ))}
          </List>
        </Grid>
      </div>
      <div className='content'>
        <h2>概要</h2>
        <TableContainer className='overview-table-container'>
          <Table>
            <TableBody>
              {companyTableRows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">
                    <span dangerouslySetInnerHTML={{__html: row.value}}></span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  )
}

export default Mission
