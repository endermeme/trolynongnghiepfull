function MenuItem(props: {text: string, img_src: string, to: string}) {
   return <a href={props.to}>
    <div className="bg-slate-100 p-6 rounded-lg shadow-lg active:shadow-inner flex items-center m-4">
   <img
     src={props.img_src}
     alt="Diễn đàn nông nghiệp icon"
     className="rounded-full"
     width={50}
     height={50}
   />
   <p className="ml-4 text-black font-bold">{props.text}</p>
 </div>
   </a>
}

export default function Menu() {
  return (
      
      <div className="bg-white shadow-md rounded-lg">
        <MenuItem text={"Trợ lí nông nghiệp AI"} img_src="https://cdn3.iconfinder.com/data/icons/chatbot-robot/100/chatbot_01_16_bot_chat_robot_app_artificial_chatbot_dialog-1024.png" to="/service/troly.html"/>
        <MenuItem text={"Chẩn đoán sâu bệnh"} img_src="https://th.bing.com/th/id/OIP.cDm9mWSgJZySo7aEhpJ12QHaHa?rs=1&pid=ImgDetMain" to="/service/chandoanbenh.html"/>
      </div>
      
  );
}
