export default {
   
    data (){
        return{
            roleList:[
                '默认管理员',
                '代理商角色',
                '业务员角色',
                '分公司经理',
                '分公司财务',
                '大区经理',
                '大区财务',
                '事业部经理',
                '事业部财务',
                '事业部分货',
                '事业部商务',
                '文档管理员',
                '物流员角色'
            ],
            activeName: 'second',
             dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'

        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleAdd (){
            this.$axios.post('http://api.haomo-studio.com/org/roles/new', {
                name:'',
                description:'',
                createTime:'',
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            dialogFormVisible=false;
        }
    }
}