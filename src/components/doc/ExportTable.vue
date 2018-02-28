<template>
  <div class="exportTable">

    <div class="my-table">
      <n3-button type="primary" class="pull-right" @click.native="exportTable">导出</n3-button>
      <n3-data-table
        height="400px"
        :selection="selection"
        :source="source"
        :columns="columns"
        id="datatable"
        responsive
      >
      </n3-data-table>
    </div>

  </div>
</template>

<script>
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'
  export default {
    name: 'ExportTable',
    data(){
      return {
        selection: {
          checkRows: [],
//          onSelect (record, checked, checkRows) {
//          },
//          onSelectAll (checked, checkRows, changeRows) {
//          },
          getCheckboxProps(record){
            return {
              checked: false,
              disabled: false
            }
          }
        },
        columns: [{
          title: 'ID',
          dataIndex: 'queryRecordId',
          width: '100px',
        }, {
          title: '操作时间',
          dataIndex: 'queryDate',
          width: '100px',
        },],
        source: [{
          queryRecordId:1,
          queryDate:"2012年4月",
        }]

      }
    },
    methods:{
      exportTable(){
        /* 获取需要导出的表格DOM元素 */
        var wb = XLSX.utils.table_to_book(document.querySelector('#datatable'))
        /* 进行导出操作 */
        var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
        try {
          FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '表格.xlsx')
        } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
        return wbout
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-table{
    width: 800px;
    padding: 5px;
    margin: 5px auto;
  }
</style>
