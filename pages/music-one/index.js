import MusicOneTitle from '../../components/MusicOne/Music-one-title';
import MusicOneTitleImage from '../../components/MusicOne/Music-one-title-image';
import ViewButton from '../../components/MusicOne/View-Button';
import Paragraph from '../../components/MusicOne/Paragraph';
import Form from '../../components/MusicOne/Form/Form';
import Layout from '../../components/MusicOne/Layout';


const text = [
  {
    "id": "1",
    "date": "16 Jan, 2021",
    "title": "<h2>Aptent Dolor Hendrerit Nunc</h2>",
    "body": "<p>Acsi mos proprius verto.Damnum dolor elit hendrerit incassum sit.Ille lenis pagus wisi.Abigo augue ea exerci obruo pertineo plaga secundum.Defui gemino paratus sed si suscipere.Cogo esca illum interdico luctus paratus sudo uxor zelus.Aliquip incassum </p><p>Qui saepius te ullamcorper wisi.Accumsan antehabeo caecus commodo consequ</p>",
    "link": "/"
  },
  {
    "id": "2",
    "date": "1 Jan, 2021",
    "title": "<h2>Blandit Imputo Populus</h2>",
    "body": "<p>Abbas in nisl pecus plaga singularis turpis. Bene dolore facilisi humo paulatim quia ut vero volutpat. Exerci facilisis jus neo typicus. Amet roto similis ulciscor vicis.</p><p>Exerci persto quibus. Abbas autem camur dolor dolus illum jus lenis refoveo usitas. Camur dolor gemino lobortis lucidus oppeto praemitto sudo tum ymo. Damnum dignissim inhibeo lobortis magna mauris nutus odio pala praesent. Abdo bene caecus dolor gemino gravis laoreet tamen. Diam nostrud occuro sagaciter uxor valde.</p>",
    "link": "/",
  }
]



function index() {
  return (
    <Layout title="Yellow-Website - Music One">

      <div className="grid lg:grid-cols-3 md:grid-cols-2">

        {/** PAGE TITLE  */}
        <div className="relative flex lg:flex-row justify-center md:min-h-screen items-center">
          <MusicOneTitle />
        </div>

        {/** TITLE IMAGE */}
        <div className="flex justify-center md:min-h-screen items-center">
          <MusicOneTitleImage />
        </div>

        {/** TITLE TEXT BODY */}
        <div className="flex flex-col justify-center lg:min-h-screen p-5 md:p-20  md:col-span-2 lg:col-span-1">
          <Paragraph title={text[0].title} body={text[0].body} />
          <div className="mt-3">
            <ViewButton link={text[0].link} name="Listen" />
          </div>
        </div>
      </div>

      {/******************************** */}
      {/** LATEST NEWS  */}
      <div className="w-full p-20">
        {
          text.map((item, index) => (
            <div key={index} className="my-20">
              <Paragraph
                date={item.date}
                title={item.title}
                body={item.body}
              />
              <div className="mt-10">
                <ViewButton link={item.link} name="More" />
              </div>

            </div>
          ))
        }
      </div>



      {/*********************************************** */}
      {/** FANS CLUB FORM */}
      <Form />





    </Layout>
  )
}

export default index
