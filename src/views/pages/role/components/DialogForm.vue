<template>
  <el-dialog title="收货地址" v-model="role.dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { useStore } from "@/store";
import { ref } from "vue";
import {
  NAME_SPACE,
  SET_ROLE_DIALOG_FORM_VISIBLE,
  CREATE_ROLE_ITEM,
} from "@/store/role/types";
export default {
  setup() {
    const store = useStore();
    const { role } = store.state;
    const form = ref({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });

    const cancel = () => {
      store.commit(NAME_SPACE + SET_ROLE_DIALOG_FORM_VISIBLE, false);
    };

    const submit = () => {
      store.dispatch(NAME_SPACE + CREATE_ROLE_ITEM);
    };

    return {
      cancel,
      submit,
      role,
      form,
      formLabelWidth: "120px",
    };
  },
};
</script>