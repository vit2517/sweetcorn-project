<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <q-select
        filled
        v-model="model"
        :options="options"
        label="ป้องกันด้วยเขตกรรม"
      />
      <q-badge color="blue" multi-line v-if="model!=null"> วิธีการป้องกัน: "{{ model.label }}" </q-badge>
      <q-badge color="blue" multi-line  v-if="model!=null"> คำอธิบายวิธีการป้องกัน: "{{ model.description }}" </q-badge>

      <q-input
        filled
        v-model="model.label" v-if="model!=null"
        label=" วิธีการป้องกัน *"
      />
      <q-input
        filled
        v-model="model.description" v-if="model!=null"
        label="คำอธิบายวิธีการป้องกัน *"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
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

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)
    const model= ref(null)
    const options= [
        {
          label: "โรคราน้ำค้าง",
          value: "1",
          description: "1.หลีกเลี่ยงการปลูกก่อนฝนตกชุก 2.กำจัดพืชอาศัย ลดการอยู่ข้ามฤดูของเชื้อสาเหตุโรค 3.ใช้เมล็ดพันธุ์ที่ได้จากต้นที่ปราศจากโรค หลีกเลี่ยงการใช้เมล็ดพันธุ์จากแหล่งที่พบการระบาด 4.ใช้เมล็ดพันธุ์ที่ตากแห้งสนิทความชื้น 12 เปอร์เซ็นต์ ป้องกันเชื้อที่ติดมากับเมล็ดพันธุ์ 5.สายพันธุ์ที่ต้านทานต่อโรค 6.ถ้าพบการระบาดของโรคในแปลงให้ถอนต้นกล้าข้าวโพดที่แสดงอาการของโรคออกไปเผาทาลายนอกแปลงปลูกทันที 7.หมั่นตรวจแปลงตั้งแต่เริ่มปลูก",
          category: "1",
        },
        {
          label: "โรคราสนิม",
          value: "2",
          description: "1.หลีกเลี่ยงการปลูกในปลายฤดูฝน ที่มีการระบาดของโรคอย่างรุนแรง 2.หลีกเลี่ยงการปลูกข้าวโพดพันธุ์อ่อนแอ 3.หมั่นตรวจแปลงตั้งแต่เริ่มปลูกถ้าพบข้าวโพดหวานเริ่มแสดงอาการของโรค ควรพ่นด้วยสารป้องกันกำจัด 4.กำจัดต้นข้าวโพดที่เป็นโรคราสนิมเผานอกแปลง 5.ใช้พันธุ์ต้านทานโรค",
          category: "2",
        },
        {
          label: "โรคใบไหม้แผลใหญ่",
          value: "3",
          description: "1.ปลูกพืชหมุนเวียน 2.เผาทำลายเศษซากพืชเป็นโรค 3.ใช้พันธุ์ต้านทานต่อโรค 4.ทำลายพืชอาศัยของเชื้อ เช่น หญ้าเดือย 5.หมั่นตรวจแปลงอยู่เสมอ ตั้งแต่ระยะกล้า",
          category: "3",
        },
        {
          label: "โรคใบไหม้แผลเล็ก",
          value: "4",
          description: "1.ใช้เมล็ดพันธุ์จากต้นที่สมบูรณ์ปราศจากโรค 2.หมั่นตรวจแปลงอยู่เสมอ พบการระบาดของโรคระยะกล้าให้ถอนเผาทำลาย 3.ทำลายเศษซากของข้าวโพดหลังเก็บเกี่ยว 4.หลีกเลี่ยงการปลูกข้าวโพดหวานในแหล่งที่มีการระบาดของโรค 5.ทำลายพืชอาศัยของโรค เช่น หญ้าเดือย",
          category: "4",
        },
        {
          label: "โรคใบด่างแคระ",
          value: "5",
          description: "1.กำจัดพืชที่เป็นแหล่งอาศัยของเชื้อ เช่น หญ้าจอนห์สัน 2.กำจัดเพลี้ยอ่อนข้าวโพด ซึ่งเป็นแมลงพาหะนำโรค 3.ปลูกพืชหมุนเวียน 4.ใช้เมล็ดพันธุ์ต้านทานโรค 5.หลีกเลี่ยงการปลูกข้าวโพดในช่วงที่มีการระบาดของแมลงพาหะ",
          category: "5",
        },
        {
          label: "โรคใบด่างลายหรือโรคใบด่างอ้อย",
          value: "6",
          description: "1.กำจัดพืชที่เป็นแหล่งอาศัยของเชื้อ เช่น หญ้าจอนห์สัน 2.กำจัดเพลี้ยอ่อนข้าวโพด ซึ่งเป็นแมลงพาหะนำโรค 3.ปลูกพืชหมุนเวียน 4.ใช้เมล็ดพันธุ์ต้านทานโรค 5.หลีกเลี่ยงการปลูกข้าวโพดในช่วงที่มีการระบาดของแมลงพาหะ",
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
