import { Image, Container } from 'react-bootstrap'
import pepper from "./embeds/pepper.png"


export function Home({account}:{account:string}) {

  return (
    <Container fluid className="cover">
      <Container>
      <br/>
        <div className="row align-items-md-stretch mt-1">
          <div className="col-md-8 mt-100">
            <div className="h-100 p-2 rounded-3">
              <br /><br/>
              <h1 className="big">
                <b>Welcome To Pepper DAO </b>
              </h1>
              <br />
              <h5>
              A VC Fund DAO For Crypto Communities
              </h5>{' '}
              <br />
              You are logged in as {account}
            </div>
          </div>

          <div className="col-md-4">
            <div className="h-10 rounded-3 text-center">
              <Image roundedCircle src={pepper} height={300} width={300} />
            </div>
          </div>
        </div>

        <Container fluid>
          <hr />
<br/><br/>
          <div className="mt-20 mt-md-0 row">
            <div className="mt-30 col-md-4 no-gutters">
              <div className="pb-10 color-heading f-14 bold text-uppercase sp-20">
                <h2>
                  <b>PEPDAO</b>
                </h2>
              </div>
              <div className="pb-15 color-main f-32 bold">
                <h5>Token</h5>
              </div><br/>
              <div className="col-xl-9 color-heading f-18 medium op-7 text-adaptive">
                {' '}
                <div>
                  Members should be holding the PEPDAO token to mint take part in governance and also to mint membership NFTs
                </div>
              </div>
            </div>
            <div className="mt-30 col-md-4 no-gutters">
              <div className="pb-10 color-heading f-14 bold text-uppercase sp-20">
                <h2>
                  <b>PEPNFT</b>
                </h2>
              </div>
              <div className="pb-15 color-main f-32 bold">
                <h5>Community Membership</h5>
              </div><br/>
              <div className="col-xl-9 color-heading f-18 medium op-7 text-adaptive">
                {' '}
                <div>
                  You need to mint Pepper NFTs (PEPNFT) to be part of the Pepper DAO
                </div>
              </div>
            </div>
            <div className="mt-30 col-md-4 no-gutters">
              <div className="pb-10 color-heading f-14 bold text-uppercase sp-20">
                <h2>
                  <b>PEPGOVERN</b>
                </h2>
              </div>
              <div className="pb-15 color-main f-32 bold">
                <h5>Pepper Governance Module</h5>
              </div><br/>
              <div className="col-xl-9 color-heading f-18 medium op-7 text-adaptive">
                {' '}
                <div>Governance module compatible with front ends like Tally</div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </Container>
      </Container>
    </Container>
  )
}
