import React, { useState } from "react";
import ImgCrop from "antd-img-crop";
import { message, Upload } from "antd";
import axios from "axios";

export default function test() {
  const [cover, setCover] = useState("");
  const [avatar, setAvatar] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [love, setLove] = useState("");
  const [bio, setBio] = useState("");
  const [shortBio, setShortBio] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [editImage, setEditManga] = useState(false);

  async function uploadImage(file) {
    try {
      const formData = new FormData();
      formData.append("image", file);
      message.loading("Uploading");

      axios
        .post("https://api.imgur.com/3/image", formData, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6MSwiaWF0IjoxNjE4MTA1NDAxLCJleHAiOjE2MjMyODk0MDF9.WUoL3ICXEVYP4RSSRQO_cJSCxve3bUkuosWnM_f7cpc",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      setEditManga(true);
    } catch (e) {
      handleErrorApi(e);
      // message.error('Có lỗi xảy ra.')
    }
  }
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const customAction = (file) => {
    uploadImage(file);
    return new Promise(async (res, rej) => {
      let src = file.url;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
        });
      }
      if (src) setAvatar(src);
      res(src);
    });
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Chỉ chấp nhận JPG/PNG file!");
    }
    const isLt7M = file.size / 1024 / 1024 < 2;
    if (!isLt7M) {
      message.error("Kích thước phải bé hơn 7MB");
    }
    // return isJpgOrPng && isLt7M;
    return true;
  };

  const handleSubmit = async () => {
    message.loading("Uploading...");
    editProfile({
      name,
      username,
      love,
      bio,
      shortBio,
      gender,
      dob,
      placeOfBirth,
    })
      .then((res) => {
        handleCloseModal();
        props.getProfile();
        reset();
      })
      .catch(() => {
        message.error("Có lỗi xảy ra!");
      });
    // console.log(name)
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <ImgCrop grid>
      <Upload
        listType="picture-card"
        fileList={fileList}
        action={customAction}
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // beforeUpload={beforeUpload}
        onChange={onChange}
        onPreview={onPreview}
      >
        + Add image
        {/* <img src={avatar} /> */}
      </Upload>
    </ImgCrop>
  );
}
