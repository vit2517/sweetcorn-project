<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-md">
    <q-form>
    <q-select
        filled
        v-model="model"
        :options="options"
        label="ตรวจโรค"
      />
      <q-badge color="blue" multi-line v-if="model!=null"> ชนิดของโรค: "{{ model.label }}" </q-badge>
      <q-badge color="blue" multi-line  v-if="model!=null"> : คำอธิบายเชื้อสาเหตุและลักษณะอาการ: "{{ model.description }}" </q-badge>

    </q-form>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar()

    // const name = ref(null)
    // const age = ref(null)
    // const accept = ref(false)
    const model= ref(null)
    const options= [
        {
          label: "โรคราน้ำค้าง",
          value: "1",
          description: "เซื้อสารเหตุเกืดจาก Peronosclerospora sorghi, ลักษณะอาการ ระยะแรก (local symptom) ต้นกล้าจะพบจุดสีขาวหรือสีเหลืองอ่อนบนใบเลี้ยงและใบจริง 2-3 ใบแรก ต่อจากนั้นจุดนี้จะขยายออกเป็นสีขาวลุกลามไปยังโคนใบ ระยะที่สอง (systemic symptoms) บนใบที่ผลิออกมาใหม่จะพบลายทางสีขาว เขียวอ่อนหรือเหลืองอ่อนเกิดขึ้นจากโคนใบถึงปลายใบ  ยาวติดต่อกันไปหรือขาดเป็นช่วง",
          category: "1",
        },
        {
          label: "โรคราสนิม",
          value: "2",
          description: "เซื้อสารเหตุเกืดจาก Southern rust, ลักษณะอาการ ใบ ลำต้น กาบใบ ฝัก ช่อดอกตัวผู้ แสดงอาการเป็นมีจุดนูนเล็กสีน้าตาลแดง ขนาดของแผล 0.2-2.0 มิลลิเมตร ถ้าเป็นโรครุนแรงจะทำให้ใบแห้งตายในที่สุด",
          category: "2",
        },
        {
          label: "โรคใบไหม้แผลใหญ่",
          value: "3",
          description: "เซื้อสารเหตุเกืดจาก Exserohilum turcicum, ลักษณะอาการ เกิดโรคได้กับทุกส่วนของข้าวโพดโดยเฉพาะบนใบ กาบใบ ลำต้น และฝัก โดยเกิดเป็นแผลขนาดใหญ่สีเทา หรือสีน้้ำตาล มีลักษณะยาวตามใบ หัวท้ายเรียวคล้ายรูปกระสวย อาการจะเกิดกับใบล่างก่อน แผลยาว 2.5-15 เซนติเมตร ใบที่มีอาการรุนแรงแผลจะขยายตัวรวมกันเป็นแผลใหญ่ทาให้ใบไหม้และแห้งตายในที่สุด กรณีที่เกิดกับ",
          category: "3",
        },
        {
          label: "โรคใบไหม้แผลเล็ก",
          value: "4",
          description: "เซื้อสารเหตุเกืดจาก Bipolaris maydis, ลักษณะอาการ ระยะแรกจะเกิดจุดเล็กสีเขียวอ่อน ฉ่าน้ำ ต่อมาจุดจะขยายออกตามความยาวของใบ โดยแผลขนานไปตามเส้นใบ ตรงกลางแผลจะมีสีเทา ขอบแผลมีสีเทาน้้ำตาล แผลที่ขยายใหญ่เต็มที่มีขนาดกว้าง 6-12 มิลลิเมตร ยาว 6-27 มิลลิเมตร ข้าวโพดที่เป็นโรครุนแรงแผลจะขยายตัวรวมกันเป็นแผลใหญ่ ใบแห้งตาย",
          category: "4",
        },
        {
          label: "โรคใบด่างแคระ",
          value: "5",
          description: "เซื้อสารเหตุเกืดจาก Maize dwarf mosaic virus, ลักษณะอาการ ข้าวโพดแสดงอาการใบเหลืองซีดทั่วทั้งใบ ยอดอ่อนมีสีเหลืองซีดหรือมีจุดปะเหลือง ต้นแคระแกร็น  ถ้าอาการของโรครุนแรงต้นข้าวโพดระยะต้นกล้าจะแห้งตายขณะยังเล็ก ต้นข้าวโพดที่โตแล้วจะให้ฝักที่ไม่สมบูรณ์ กาบหุ้มฝักมีสีเหลืองซีด และบางส่วนของกาบหุ้มฝักแห้งเป็นสีน้ำตาลอ่อน แห้งเป็น หากเกิดกับข้าวโพดสา",
          category: "5",
        },
        {
          label: "โรคใบด่างอ้อย",
          value: "6",
          description: "เซื้อสารเหตุเกืดจาก Sugarcane mosaic virus, ลักษณะอาการ ข้าวโพดมีอาการใบด่างลายเขียวซีดสลับเขียวเข้มขนานไปกับความยาวของเส้นกลางใบ ในระยะต้นโตพบเปลือกหุ้มฝักข้าวโพดเป็นสีขาวตั้งแต่ฝักเล็กจนถึงฝักโหญ่ ",
          category: "6",
        },
      ]

    return {
      name,
      age,
      accept,
      model,
      options,
      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }

    }
  },
};
</script>

