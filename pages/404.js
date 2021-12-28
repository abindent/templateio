import Head from 'next/head'

export default function error() {
  return (
      <>
    <div>
      <Head>
        <title>404 | Template.io</title>
        <link rel="icon" href="https://osourcegames.firebaseapp.com/canva-big-metal-letter-v-MAAm7Bhyp1o.png" />
      </Head>
     </div>
     <div>
        <style dangerouslySetInnerHTML={{__html: "\n@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');   \n/*======================\n    404 page\n=======================*/\n.h2{\n font-family: Poppins, sans-serif;\n}\n.p{\n    font-family: Poppins, sans-serif;   \n}\na{\n    text-decoration: none;\n    font-family: Poppins, sans-serif;   \n}\n.page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif;\n}\n\n.page_404  img{ width:100%;}\n\n.four_zero_four_bg{\n \n background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);\n    height: 400px;\n    background-position: center;\n }\n \n \n .four_zero_four_bg h1{\n font-size:80px;\n }\n \n  .four_zero_four_bg h3{\n\t\t\t font-size:80px;\n\t\t\t }\n\t\t\t \n\t\t\t .link_404{\t\t\t \n\tcolor: #fff!important;\n    padding: 10px 20px;\n    background: #39ac31;\n    margin: 20px 0;\n    display: inline-block;}\n\t.contant_box_404{ margin-top:-50px;}\n    " }} />
        <section className="page_404">
          <div className="container">
            <div className="row">	
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>
                  <center>
                    <div className="contant_box_404">
                      <h3 className="h2">
                        Uh Oh!
                      </h3>
                      <p className="p">The page you are looking for is unavaible!</p>
                      <a href="/" className="link_404">Go to Home</a>
                    </div>
                  </center></div>
              </div>
            </div>
          </div>
        </section>
      </div>
     </>
  )
}
