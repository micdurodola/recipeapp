import React from "react";
import { Card} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;



const Recipe = (props)=>{  
    return(      


  <Card
    style={{ width: 300 }}
    cover={<img src={props.image} alt ="" />  } 
    
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      
      title={props.label}
      description={props.calories}
    />
  </Card>
        
        

    );
}
export default  Recipe;







