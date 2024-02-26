import FontHead from "../../components/fontHead/FontHead"
import MyNavbar from '../../components/navbar/MyNavbar'
import MainFooter from '../../components/mainFooter/MainFooter'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Kurumsal.scss'


const Kurumsal = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <FontHead page={'Kurumsal'}></FontHead>
      <Container className="pt-5 pb-5 mb-5">
        <h4 id="title">KUZEM - KOMEK Uzaktan Eğitim Merkezi</h4>
        <p id="text">
          Geçmişten günümüze bir ülkenin sahip olduğu en vazgeçilmez kaynak insandır. Bu kaynağın ülkelerin ihtiyaçları doğrultusunda yetiştirilmesi uygarlaşma yolundaki hedeflerin gerçekleşmesine katkı sağlar. ‘Konya Modeli Belediyecilik’ idolü ile değişen dünya algısıyla beraber önce evimize hatta cebimize kadar giren internetin yararlarını kullanarak KOMEK Uzaktan Eğitim Merkezi (KUZEM)’ni 2020 yılında hayata geçirdik. <br /> <br />

          Online eğitim almak isteyenler giderek çoğalıyor. Dijital platformlarda yer alan eğitim programları günümüzde oldukça popüler hale geldi. Her an her yerden erişim imkânı sunan KUZEM içerik bakımından oldukça zengin ve öğretici olanaklar sağlıyor. <br />
          Teknolojik yeniliklerin ve keşiflerin sayısı arttıkça, öğrencilerin akademik hayallerini gerçekleştirme ve başarıya ulaşma şansları da artmaktadır. Uzun zamandır hayatımızda olan fakat son zamanlarda daha da yaygınlaşmış olan KOMEK Uzaktan Eğitim Merkezi, zaman ve mekan ilişkisine bağlı kalınmadan, öğretim ve tasarım tekniklerini detaylı olarak anlatan, farklı teknolojilerle iletişim sağlayan, özgün, kurumsal ve yönetsel yapılanmayı gerektiren planlanmış bir eğitim modeli olarak tanımlanmaktadır. <br />
          Çevrimiçi öğrenim için küresel bir varış noktası olarak, insanları bilgi aracılığıyla birbirine bağlıyoruz. <br /> <br />

          Türkiye’nin dört bir yanından eğitmenler KUZEM’de binlerce öğrenciye eğitim veriyor. <br />
          1.500 eğitim videosu kuzem.org adresinden çevrim dışı eğitimlere tek seferlik üye olan bütün kursiyerlerin erişimine açılarak sınırsız hizmet sunuldu. Türkçe, Arapça, İngilizce dillerinde çok dilli bir anlayışla ücretsiz sürdürülen eğitimler uluslararası platformda yer alarak küresel öğrenmede Konya Modeliyle yer alıyor. <br /> <br />

          kuzem.org için başvuru süreci bulunmuyor, sadece kaydolabilir ve öğrenmek istediğiniz herhangi bir konuda video dersleri takip edebilirsiniz. KUZEM olarak Bilişim Teknolojileri, El Sanatları, Resim, Din ve Değerler Eğitimi, Spor, Yabancı Diller, Kişisel Gelişim alanlarında eğitim videoları kuzem.org adresinde kursiyerlerini bekliyor. Web sitesine üye olduktan sonra çevrimdışı olarak öğrenciler diledikleri zaman diledikleri yerden eğitimlerine devam edebiliyor.
          Ayrıca yılda üç defa kayıt dönemi bulunan KUZEM ile belirli gün ve saatlerde online olarak eğitimler alınabiliyor. Eğitimlerin tamamlanması neticesinde kursiyerler bitirme belgelerine e-Devlet üzerinden erişim sağlayabiliyor
        </p>


        <Container className="pt-5">
          <Row>
            <Col xs={6} md={3} style={{paddingLeft:'0'}}>
              <img src="src/assets/images/basgan.png" alt=""  id='img'/>

            </Col>

            <Col xs={12} md={9}>
<h4 id="title">Başkanın Mesajı</h4>
<p id="text">

Konya; tarihi, kültürü, doğal güzellikleri ve insanıyla eşine az rastlanır birikime sahip kadim bir şehirdir. <br />
Konya Büyükşehir Belediyesi olarak sahip olduğumuz bu birikimi en iyi şekilde değerlendirerek şehrimizi sosyal, ekonomik ve kültürel anlamda çağın ilerisine taşımak en büyük önceliğimiz. <br />
Bu doğrultuda; değişen şartlara en hızlı şekilde adapte olmak, şehrimizin gelişen ekonomisine, sosyal değerlerine ve hemşehrilerimizin istihdamına katkı sunmak adına Meslek Edindirme Kurslarımız (KOMEK) oldukça önemli bir yere sahip. <br />
Meslek Edindirme Kurslarımızda bugüne dek 73 KOMEK/ASEM hizmet binasında, 35 spor merkezinde ve 33 oyun salonunda 1 milyonu aşkın hemşehrimize; teknik eğitimlerden sanat eğitimlerine, yabancı dilden müzik eğitimlerine, bilişim teknolojilerinden kişisel gelişim eğitimlerine kadar 544 branşta hizmet verdik. Yılda üç dönem kayıt alan KOMEK’lerimizin yıllık kursiyer kapasitesini 150 bine çıkardık. <br />
Kurslarımızda eğitim alan kursiyerlerimiz KOMEK atölyelerinde üretim yapıyor, KOMEK Kooperatifi vasıtasıyla ürettiklerini dünyaya pazarlıyor ve bunlarla birlikte sanatsal faaliyetlerde de bulunuyorlar. <br />
KOMEK’te aynı zamanda ANATOYA adıyla bir oyuncak markası, ZEYBE adıyla bir çanta markası ve ZENOBYA adıyla bir polar ceket-yelek markası oluşturduk. <br />
KOMEK’lerimizde aynı zamanda işitme engellilere yönelik Kur’an-ı Kerim, Yemek ve Pasta Yapımı, Giyim ve Mefruşat, Türk İşaret Dili gibi kurslarımız devam ediyor. <br />
Meslek Edindirme Kurslarımızda yalnızca yetişkinlere değil, Genç KOMEK adıyla öğrencilerimize ve özel çocuklarımıza da eğitimler veriyoruz. <br />
Bugüne kadar 150 bin öğrencimizin katıldığı Genç KOMEK’te, yalnızca 2021 yılı içerisinde uzaktan eğitimle Türkiye’nin her yerinden 60 bin öğrencimizi buluşturduk. <br />
Özellikle pandemi döneminde büyük bir ihtiyacı gideren KOMEK UZEM ile vatandaşlarımızın evlerinden çıkamadığı dönemlerde, çeşitli konularda kendilerini geliştirmeleri ve kişisel gelişim alanlarında yeni yetkinlikler kazanabilmeleri için kurslarımızı çevrim içi olarak sürdürdük. <br />
Tüm Türkiye’de takdir toplayan uzaktan eğitimlerimiz, karşılıklı etkileşimin olduğu interaktif program ile adeta gerçek bir sınıf ortamı oluşturularak gerçekleştirildi.  <br />
Hâlihazırda ülkemizin pek çok farklı şehrinden ve Fransa, Almanya, Irak ve Çin gibi dünyanın çeşitli ülkelerinden kursiyerlerimizin kayıtlı olduğu KOMEK UZEM, zaman ve mekân sınırlaması olmadan onlarca farklı branşta hizmet vermeye devam ediyor. <br />
Meslek Edindirme Kurslarımızda eğitimlerini sürdüren tüm kursiyerlerimize çalışmalarında başarılar diliyorum.
Konya Modeli Belediyecilik anlayışımızla; Konya için, ülkemiz için çalışmaya, üretmeye devam ediyoruz. <br />
</p>
            </Col>
            <div style={{display:'flex', justifyContent:'end', paddingRight:'5%'}}>

<p  id="text" >Uğur İbrahim Altay </p>

            </div>
            <div style={{display:'flex', justifyContent:'end'}}>

<p id="text" >Konya Büyükşehir Belediye Başkanı</p>
            </div>
            
           
          </Row>

        </Container>



      </Container>



      <MainFooter visibility={'hidden'}></MainFooter>
    </div>
  )
}

export default Kurumsal
