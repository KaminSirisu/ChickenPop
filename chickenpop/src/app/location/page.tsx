import React from "react";

export default function page() {
  return (
    <>
      <section className="py-12 px-20">
        <div className="text-3xl font-semibold text-center">
          ChickenPop Branch
        </div>
        <div className="my-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123844.74103708894!2d100.5422588570696!3d14.068427125153406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d815d4cea33ef%3A0xfa1105fa71c9914f!2sBonchon%20Klongluang!5e0!3m2!1sen!2sth!4v1711869845103!5m2!1sen!2sth"
            height="450"
            className="w-full"
          ></iframe>
        </div>

        <div className="container bg-[#A14714] py-5 px-6 rounded-t-lg">
          <p className="text-white font-bold text-lg">ChickenPop Branch</p>
        </div>
        <div className="container py-4 px-6 shadow-lg rounded-b-lg">
          <table className="text-xs">
            <tr className="mb-10 text-lg text-left">
              <th className="p-2">Store name</th>
              <th className="p-2">City</th>
              <th className="p-2 w-3/5">Address</th>
              <th className="p-2">Phone</th>
            </tr>
            <tr>
              <td className="p-3">บอนชอน คริสตัล ราชพฤกษ์</td>
              <td className="p-3">กรุงเทพมหานคร</td>
              <td className="p-3">
                เลขที่ 555/9 หมู่ที่ 1 โครงการศูนย์การค้า เดอะ คริสตัล เอสบี
                ราชพฤกษ์ ห้องเลขที่ A109 ชั้น 1 ถนนราชพฤกษ์ ตำบลบางขนุน
                อำเภอบางกรวย จังหวัดนนทบุรี รหัสไปรษณีย์ 11130
              </td>
              <td className="p-3">080-073-7718</td>
            </tr>
            <tr>
              <td className="p-3">บอนชอน คลองหลวง</td>
              <td className="p-3">ปทุมธานี</td>
              <td className="p-3">
                เลขที่ 7/43-7/44 หมู่ที่ 7 ตำบลคลองสอง อำเภอคลองหลวง ปทุมธานี
                12130
              </td>
              <td className="p-3">065-950-0131</td>
            </tr>
            <tr>
              <td className="p-3">บอนชอน ซีคอนบางแค</td>
              <td className="p-3">กรุงเทพมหานคร</td>
              <td className="p-3">
                607 ศูนย์การค้าซีคอนบางแค ห้องเลขที่ 223 ถนนเพชรเกษม แขวงบางหว้า
                เขตภาษีเจริญ กรุงเทพมหานคร 10160
              </td>
              <td className="p-3"> 065-120-9113</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
}
