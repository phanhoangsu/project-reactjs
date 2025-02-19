import React, { useState } from "react";

import { CHECKBOX, DATA, INVITE_OPTION, ROLL } from "./const";

const BtvnBuoi9 = () => {
  const [from, setForm] = useState(DATA);
  const [show, setShow] = useState(false);

  const onSubmit = () => {
    if (!!from) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  //   console.log("from", from);

  const onInput = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const renderCheckBox = () => {
    const onCheckedLanguage = (value) => {
      const currenLanguages = from.programLanguage;
      const newLanguages = !currenLanguages.includes(value)
        ? [...currenLanguages, value]
        : currenLanguages.filter((i) => i !== value);

      setForm((prevFrom) => ({ ...prevFrom, programLanguage: newLanguages }));
    };

    return CHECKBOX.map((item, index) => {
      return (
        <div key={index}>
          <input
            onClick={(e) => onCheckedLanguage(item)}
            value={item}
            type="checkbox"
          />
          {item}
        </div>
      );
    });
  };

  const renderOption = () => {
    return ROLL.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
  };

  const renderInviteOption = () => {
    return INVITE_OPTION.map((item, index) => {
      return (
        <div key={index}>
          <input
            onClick={(e) => onInput("isInvite", e.target.value)}
            name="invite"
            value={item}
            type="radio"
          />
          {item}
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Biểu mẫu khảo sát ITViec </h1>
      <div>
        <p>Họ tên </p>
        <input onChange={(e) => onInput("name", e.target.value)} />
      </div>
      <div>
        <p>Email </p>
        <input onChange={(e) => onInput("email", e.target.value)} />
      </div>
      <div>
        <p>Tuổi </p>
        <input onChange={(e) => onInput("age", e.target.value)} type="number" />
      </div>
      <div>
        <p>Hiện tại bạn đang là </p>
        <select onChange={(e) => onInput("currentJob", e.target.value)}>
          {renderOption()}
        </select>
      </div>
      <div>
        <p>Bạn sẽ giới thiệu ITviec với bạn bè chứ</p>
        {renderInviteOption()}
      </div>
      <div>
        <p>{`Ngôn ngữ lập trình và Framework bạn đã biết? (Có thể chọn nhiều đáp án)`}</p>
        {renderCheckBox()}
      </div>
      <div>
        <p>Bạn có câu hỏi gì cho ITviec không ?</p>
        <textarea onChange={(e) => onInput("quetion", e.target.value)} />
      </div>
      <button onClick={onSubmit}> Submit</button>

      {show && (
        <div>
          <p>
            Họ tên: <span>{from.name}</span>
          </p>
          <p>
            Email: <span>{from.email}</span>
          </p>
          <p>
            Tuổi: <span>{from.age}</span>
          </p>
          <p>
            Hiện tại bạn đang là: <span>{from.currentJob}</span>
          </p>
          <p>
            Bạn sẽ giới thiệu IT việc cho bạn bè chứ:
            <span>{from.isInvite}</span>
          </p>
          <p>
            Ngôn ngữ lập trình của bạn là: <span>{from.programLanguage}</span>
          </p>
          <p>
            Bạn có câu hỏi gì không: <span>{from.quetion}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default BtvnBuoi9;
