import React from "react";
import moment from "moment";

const DataTicketModal = ({ data, modal, setModal, itemModal }) => {
  console.log(data && data[itemModal]);
  if (!modal) return null;
  return (
    <>
      <section id="modal" onClick={() => setModal(false)}>
        <div className="content">
          <div className="contactImg">
            <img src={data[itemModal].contact.profilePicUrl} alt="" />
          </div>
          <div className="contactData">
            <div className="contactInfo">
              <p>
                Contato: <span>{data[itemModal].contact.name}</span>
              </p>
              <p>
                Status do Atendimento: <span>{data[itemModal].status}</span>
              </p>
              <p>
                Numero do Contato: <span>{data[itemModal].contact.number}</span>
              </p>
            </div>
            <div className="adicionalInfo">
              <p>
                Mensagem Criada em :
                <span>
                  {moment(data[itemModal].createdAt).format("DD/MM/YYYY")}
                  {moment.parseZone(data[itemModal].createdAt).format("HH:mm:ss")}
                </span>
              </p>
              <p>
                Mensagem Atualizada em :
                <span>
                  {moment(data[itemModal].updatedAt).format("DD/MM/YYYY")}
                  {moment.parseZone(data[itemModal].updatedAt).format("HH:mm:ss")}
                </span>
              </p>
              <p>
                Ultima Msg: <span>"{data[itemModal].lastMessage}"</span>
              </p>
              <p>
                Status da Ultima Mensagem:
                <span>{data[itemModal].statusChatEnd}</span>
              </p>
            </div>
          </div>

          <span className="close" onClick={() => setModal(false)}>
            X
          </span>
        </div>
      </section>
    </>
  );
};

export default DataTicketModal;
