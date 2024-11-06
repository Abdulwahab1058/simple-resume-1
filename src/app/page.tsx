import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-sky-600">
      <h1 className="text-center bg-pink-300 p-2 font-bold  text-2xl"><i>Simple Resume</i></h1>

      <h1 className="text-center text text-3xl">Malik Abdul Wahab</h1>
      <section>
        <p><b>Email:</b><a href="http://malikwahab1058@gmail.com">malikwahab1058@gmail.com</a></p>
        <p><b>Phone:</b>+92 347-1210922</p>
        <p><b>Address:</b>House No 1058, Sector 11 1/2 Block'J', Street 18, Orangi Town Karachi.</p>
        <hr /> <hr /> <hr /><hr /> <br />

        <h2><u><b>Career Objective:</b></u></h2>
        <br />
        <p>Motivated software engineer with 3 years of experience in developing scalable web applications, seeking to contribute my skills in a dynamic tech company. Passionate about innovative solutions and continuous learning to drive project success</p>
<br />
        <h2><b><u>Language</u></b></h2>
        <li>Urdu</li>
        <li>English</li>
  <br />

        <h2><b><u>Experience</u></b></h2>
        <li>3 years experience as a web developer.</li>
<br />
        <h2><b><u>Education</u></b></h2>
        <li><Link href="/education">Go to Education page</Link></li>
  <br />
        <h2><b><u>Skills</u></b></h2>
        <li><Link href="/skills">Go to Skills page</Link></li>
<br />
        <h2><b><u>References</u></b></h2>
        <li>Will be furnished upon request.</li>
      </section>

    </div>
    
  );
}
