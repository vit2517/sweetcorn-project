<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form>
    <q-select
        filled
        v-model="model"
        :options="options"
        label="ตรวจแปลง"
      />
      <q-badge color="blue" multi-line v-if="model!=null"> ประเภทการสำรวจ: "{{ model.label }}" </q-badge>
      <q-badge color="blue" multi-line  v-if="model!=null"> คำอธิบายวิธีการสำรวจ: "{{ model.description }}" </q-badge>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)
    const model= ref(null)
    const options= [
        {
          label: "แบบยกร่อง",
          value: "1",
          description: "แปลงปลูกพืชที่เป็นสี่เหลี่ยมและแปลงยกร่องหรือตามความสะดวกของเกษตรกร สุ่มสำรวจ 10 จุดๆละ 10 ต้น หรือตามความเหมาะสม ตัวอย่างพืช 100 ต้นต่อ 1 แปลง",
          category: "1",
        },
        {
          label: "สุ่มทั่วแปลง",
          value: "2",
          description: "แปลงที่มีรูปทรงไม่แน่นอนหรือขึ้นอยู่กับความสะดวกของเกษตรกร สุ่มสำรวจ 10 จุดๆละ 10 ต้น หรือตามความเหมาะสม ตัวอย่างพืช 100 ต้นต่อ 1 แปลง",
          category: "2",
        },
        {
          label: "สลับฟันปลา",
          value: "3",
          description: "แปลงปลูกพืชที่เป็นสี่เหลี่ยมหรือแปลงปลูกพืชที่มีรูปทรงไม่แน่นอนและขึ้นอยู่กับความสะดวกของเกษตรกร สุ่มสำรวจ 10 จุดๆละ 10 ต้น หรือตามความเหมาะสม ตัวอย่างพืช 100 ต้นต่อ 1 แปลง",
          category: "3",
        },
        {
          label: "แปลงยกร่อง",
          value: "4",
          description: "แปลงปลูกพืชที่เป็นสี่เหลี่ยมและแปลงยกร่องหรือตามความสะดวกของเกษตรกร สุ่มสำรวจ 10 จุดๆละ 10 ต้น หรือตามความเหมาะสม ตัวอย่างพืช 100 ต้นต่อ 1 แปลง",
          category: "4",
        },
        {
          label: "แถว",
          value: "5",
          description: "แปลงปลูกพืชที่เป็นสี่เหลี่ยมหรือแปลงปลูกพืชที่มีรูปทรงไม่แน่นอนและขึ้นอยู่กับความสะดวกของเกษตรกร สุ่มสำรวจ 10 จุดๆละ 10 ต้น หรือตามความเหมาะสม ตัวอย่างพืช 100 ต้นต่อ 1 แปลง",
          category: "5",
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
  }
}
</script>
