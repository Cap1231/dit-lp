import React from "react"
import Container from '@material-ui/core/Container'
import './Recruitment.scss'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
// import TopImage from '../img/recruitment-top.jpg'
import TopImage from '../img/recruitment-top.svg'

const Recruitment = () => {
  const requirements = [
    {name: '採用職種', value: 'システムエンジニア、システム運用エンジニア'},
    {name: '雇用形態', value: '正社員/契約社員'},
    {name: '必須スキル', value: '設計開発経験3年以上<br/>英語（大学入学レベルが目安で、抵抗のない方）'},
    {name: '学歴・資格', value: '不問'},
    {name: '提出物', value: '履歴書（顔写真付）、職務経歴書、志望動機（会ってお話くださってもOKです）'},
    {name: ' 選考方法', value: '面接（最低2回）'},
    {name: ' 応募方法', value: '随時募集していますので、 メール、電話、郵送にてご連絡ください\n'},
  ]

  const workingConditions = [
    {name: '給与', value: '経験・能力に応じて弊社規定に基づいて算出'},
    {name: '諸手当', value: '通勤手当（月上限2万円まで）<br/>時間外勤務手当<br/>役職手当'},
    {name: ' 給与見直し', value: '年1回（1月）'},
    {name: '賞与', value: '年2回（7月・12月）<br/>管理職は年俸制'},
    {name: '勤務地', value: '東京、千葉、関東近郊（顧客先にて常駐もあり）'},
    {name: '就業時間', value: '9:00～18:00、もしくは、常駐先のお客様の条件に準拠'},
    {name: '休日休暇', value: '週休2日制（シフトの場合、休日の曜日は特定されませんが、土日出勤をした翌週は平日が休みとなります）<br/>年末年始休暇、夏季休暇、年次有給休暇（初年度は10日間）<br/>年間休日120日前後'},
    {name: '各種保険', value: '健康保険、厚生年金、雇用保険、労災保険'},
  ]

  return (
    <>
      <img src={TopImage} alt='recruitment' className='top-image' />
      <Container maxWidth="md" className="recruitment">
      <div className='content'>
        <h2>採用情報</h2>
        <div>
          自分の夢に向かって努力する人、現状に満足せず常に改善しようと意識して仕事が出来る人、
          顧客の視点で物事を考え、それを実現しようと行動する人、システムの運用を通じて顧客の業務を改善しようと心掛ける人、
          そして、私たちと同じ価値観を共有し仲間と一緒に成長していくことに喜びを感じられる人を募集しています。
        </div>
      </div>

      <div className='content'>
        <h3>採用条件（中途採用）</h3>
        <TableContainer className='recruitment-table-container'>
          <Table>
            <TableBody>
              {requirements.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" className='name'>
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

      <div className='content'>
        <h3>待遇・勤務地</h3>
        <TableContainer className='recruitment-table-container'>
          <Table>
            <TableBody>
              {workingConditions.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" className='name'>
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
    </>
  )
}

export default Recruitment
