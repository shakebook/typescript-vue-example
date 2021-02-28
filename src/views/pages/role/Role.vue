<template>
  <div class="body">
    <div class="form">
      <el-button type="primary" @click="showDialogForm">新增角色</el-button>
      <DialogForm />
    </div>
    <el-table :data="role.roleList" style="width: 100%">
      <el-table-column label="日期">
        <template #default="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createAt }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色名称">
        <template #default="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.roleName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { useStore } from "@/store";
import DialogForm from "./components/DialogForm";
import { NAME_SPACE, SET_ROLE_DIALOG_FORM_VISIBLE } from "@/store/role/types";
export default {
  name: "Role",
  components: { DialogForm },
  setup() {
    const store = useStore();
    const { role } = store.state;
    //let dialogFormVisible = ref(false).value;

    const createRole = () => {};

    const handleEdit = (index, row) => {
      console.log(index, row);
    };

    const handleDelete = (index, row) => {
      console.log(index, row);
    };

    const showDialogForm = () => {
      store.commit(NAME_SPACE + SET_ROLE_DIALOG_FORM_VISIBLE, true);
    };

    return { role, handleEdit, handleDelete, showDialogForm };
  },
};
</script>
<style scoped>
.body {
  padding: 20px 10px 60px 10px;
  background-color: #fff;
}
.form {
  margin-bottom: 10px;
}
</style>