import React, { useEffect, useState } from "react";
import { CiBitcoin } from "react-icons/ci";
import { MdOutlineSubtitles } from "react-icons/md";
import Controls from "../Controls/Controls";
import Love from "../Love/Love";
import { getAvataUrl } from "../../../containers/Avata/AvataURL";
import ButtonSale from "../Button/ButtonSale";
import ButtonTransfer from "../Button/ButtonTransfer";

interface Beat {
  index: number;
  owner: string;
  cid: string;
  title: string;
  price: number;
  isForSale: boolean;
  uploadTimestamp: number;
  numberOfLikes: number;
}

const CardOfMe: React.FC<Beat> = ({
  index,
  title,
  owner,
  price,
  cid,
  isForSale,
  uploadTimestamp,
  numberOfLikes,
}) => {
  const urls = getAvataUrl();
  const uri = urls[index % urls.length];
  return (
    <div style={styles.card}>
      <img
        src={uri}
        alt="Avatar"
        style={styles.avatar as React.CSSProperties}
      />
      <div style={styles.block1}>
        <b>ID: {index}</b>
        <p>{owner}</p>
        <p style={styles.title}>
          <MdOutlineSubtitles />
          {title}
        </p>
        <div style={styles.container}>
          <Controls src={`https://ipfs.io/ipfs/${cid}`} />
          <Love count={0} />
        </div>
        <div style={{ display: "flex" }}>
          <b style={{ marginTop: "16px", marginRight: '10px' }}>Trạng Thái: </b>
          {isForSale ? (
            <p>
              Đang bán giá {Number(price)} <CiBitcoin />
            </p>
          ) : (
            <p>Không bán</p>
          )}
        </div>
      </div>
      <div style={styles.block2}>
        <ButtonSale />
        <ButtonTransfer id={index} owner={owner} />
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "800px",
    height: "220px",
    backgroundColor: "#FEEBD0",
    borderRadius: "23px",
    margin: "30px 0px",
    display: "flex",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "10px 0",
  },
  avatar: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    padding: "10px",
  },
  block1: {
    // backgroundColor: "blue",
    borderLeft: "1px black solid",
    borderRight: "1px black solid",
    padding: "0 10px",
    margin: "10px",
  },
  block2: {
    width: "100%",
    // backgroundColor: "red",
    margin: "10px",
    alignContent: 'center',
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "0px",
  },
  title: {
    padding: "0px",
    margin: "0px",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#333", //
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default CardOfMe;
