import React from "react"
import './PrivacyPolicy.scss'
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem"
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from "@material-ui/core/ListItemIcon"
import BlurOnIcon from "@material-ui/icons/BlurOn"
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const PrivacyPolicy = () => {
  const policies1 = [
    { text: '当社へのお問い合わせ時'},
    { text: '当社へのサービスお申し込み時'},
  ]
  const policies2 = [
    { text: 'お客様への連絡のため'},
    { text: 'お客様からのお問い合せに対する回答のため'},
    { text: 'お客様へのサービス提供のため'},
  ]
  const policies3 = [
    { text: 'ご本人の同意がある場合'},
    { text: '警察からの要請など、官公署からの要請の場合'},
    { text: '法律の適用を受ける場合'},
  ]
  const policies4 = [
    { text: '当社は、当社事業目的範囲内で、個人情報の収集、利用、提供を行うものとします。当社製品の顧客以外の 個人情報を収集することはありません。また、その為の目的外の利用を行わない為に必要な措置を講じるものとします。'},
    { text: 'この収集、利用、提供にあたってはお客様の同意を得ることを必須条件とします。'},
    { text: '個人情報への不正アクセス、個人情報の紛失、破壊、改ざん及び漏えい等のリスクに対して、技術面及び組織面において合理的な安全対策、予防措置を講じるものとします。'},
    { text: '当社は、個人情報の取扱にあたり定期的な監査を行い、必要に応じて是正措置を講じるものとします。'},
  ]
  const policies5 = [
    { text: '当社は個人情報に関する法令及びその他の規範を遵守します。'},
    { text: '当社の社内規定は、必要に応じて随時見直し、社会環境に合致すべく改善します。'},
    { text: '個人情報保護管理者は社内における個人情報の適切な管理を実施します。'},
    { text: '個人情報保護および個人情報の適切な管理方法についての全社的な教育研修を実施し、日常業務における個人情報の適切な取扱いを徹底します。'},
    { text: 'お客様の個人情報収集と利用にあたっては、お客様および情報主体の同意を持って適切な方法で行います。'},
    { text: '当社は、本人様からの個人情報に関するお問い合せ、開示等のご請求に誠実かつ迅速に対応します。'},
  ]

  return (
    <Container maxWidth="md" className="privacy-policy">
      <div className='content'>
        <h2>プライバシーポリシー</h2>
        <div>
          株式会社デベロップアイティ（以下当社）では、個人情報に関する法令およびその他の規範を遵守し、<br/>
          お客様の大切な個人情報の保護に万全を尽くします。
        </div>
      </div>

      <div className='content'>
        <h3>個人情報の収集について</h3>
        <div>当社では、次のような場合に必要な範囲で個人情報を収集することがあります。</div>
        <Grid item xs={12} md={10}>
          <List dense={false}>
            {policies1.map(policy => (
              <ListItem>
                <ListItemIcon>
                  <BlurOnIcon style={{ color: '#58A6F2'}}/>
                </ListItemIcon>
                <div className='item-text-content'>
                  {policy.text}
                </div>
              </ListItem>
            ))}
          </List>
        </Grid>
      </div>

      <div className='content'>
        <h3>個人情報の利用目的について</h3>
        <div>当社は、お客様から収集した個人情報を次の目的で利用いたします。</div>
        <Grid item xs={12} md={10}>
          <List dense={false}>
            {policies2.map(policy => (
              <ListItem>
                <ListItemIcon>
                  <BlurOnIcon style={{ color: '#58A6F2'}}/>
                </ListItemIcon>
                <div className='item-text-content'>
                  {policy.text}
                </div>
              </ListItem>
            ))}
          </List>
        </Grid>
      </div>

      <div className='content'>
        <h3>個人情報の第三者への提供について</h3>
        <div>当社では、お客様より取得した個人情報を第三者に開示または提供することはありません。 ただし、次の場合は除きます。</div>
        <Grid item xs={12} md={10}>
          <List dense={false}>
            {policies3.map(policy => (
              <ListItem>
                <ListItemIcon>
                  <BlurOnIcon style={{ color: '#58A6F2'}}/>
                </ListItemIcon>
                <div className='item-text-content'>
                  {policy.text}
                </div>
              </ListItem>
            ))}
          </List>
        </Grid>
      </div>

      <div className='content'>
        <h3>個人情報の開示、訂正等について</h3>
        <div>当社は、お客様ご本人からの自己情報の開示、訂正、削除等のお求めがあった場合は、確実に応じます。</div>
      </div>

      <div className='content'>
        <h3>基本方針</h3>
        <div>
          当社は、システム開発会社としてお客様の顧客情報・機密情報を取り扱う企業です。<br/>
          当社で業務に従事するすべての者は、個人情報の保護の重要性を理解し、常にその責任を認識し、保護に努めています。<br/>
          また、個人情報保護に関する社内規定を遵守し、個人情報を適正に取り扱うことにより、お客様の情報を守ります。<br/>
          お客様よりお預かりした顧客情報、営業上の秘密情報は、お客様の財産です。<br/>
          その大切な財産を預かっていることをしっかりと認識し情報保護に努めます。
        </div>
      </div>

      <div className='content'>
        <h3>基本方針</h3>
        <div>
          当社は、システム開発会社としてお客様の顧客情報・機密情報を取り扱う企業です。<br/>
          当社で業務に従事するすべての者は、個人情報の保護の重要性を理解し、常にその責任を認識し、保護に努めています。<br/>
          また、個人情報保護に関する社内規定を遵守し、個人情報を適正に取り扱うことにより、お客様の情報を守ります。<br/>
          お客様よりお預かりした顧客情報、営業上の秘密情報は、お客様の財産です。<br/>
          その大切な財産を預かっていることをしっかりと認識し情報保護に努めます。
        </div>
      </div>

      <div className='content'>
        <h3 className='mb-0'>取扱方針</h3>
        <Grid item xs={12} md={10}>
          <List dense={false}>
            {policies4.map((policy, index) => (
              <ListItem alignItems="flex-start">
                <ListItemIcon className="list-item-index">
                  ({index})
                </ListItemIcon>
                <ListItemText className="list-item-text">
                  {policy.text}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </div>

      <div className='content'>
        <h3 className='mb-0'>活動方針</h3>
        <Grid item xs={12} md={10}>
          <List dense={false}>
            {policies5.map((policy, index) => (
              <ListItem alignItems="flex-start">
                <ListItemIcon className="list-item-index">
                  ({index})
                </ListItemIcon>
                <ListItemText className="list-item-text">
                  {policy.text}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </div>
    </Container>
  )
}

export default PrivacyPolicy
