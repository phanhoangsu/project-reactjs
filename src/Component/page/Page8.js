import React, { useState } from "react";

const DATA = {
  name: "",
  email: " ",
  age: 0,
  role: "",
  recommend: "",
  skills: [],
  question: "",
};

const Page8 = () => {
  const [form, setForm] = useState(DATA);
  const [show, setShow] = useState(false);

  const onInput = (name, e) => {
    setForm((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const handleCheckbox = (e) => {
    setForm((prev) => {
      return { ...prev, recommend: e.target.checked };
    });
  };

  const onSubmit = () => {
    if (!!form) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div>
      <div>
        <h2> Name: </h2>
        <input onChange={(e) => onInput("name", e)} />
      </div>
      <div>
        <h2> Email: </h2>
        <input onChange={(e) => onInput("email", e)} />
      </div>

      <div>
        <h2> Tuoi: </h2>
        <input onChange={(e) => onInput("age", e)} />
      </div>
      <div>
        <div>
          <label> Hiện tại bạn đang là ? </label>
        </div>
        <div>
          <select>
            <option>Học sinh </option>
            <option> Sinh viên</option>
          </select>
        </div>
      </div>
      <div>
        <h2> Bạn sẽ giới thiệu IT việc với bạn bè của bạn chứ ?</h2>
        <div>
          <label>
            <input
              checked={form.recommend === "có"}
              // name=" co"
              onChange={handleCheckbox}
              type="radio"
              value="có"
            />
            Có
          </label>
        </div>
        <div>
          <label>
            <input
              checked={form.recommend === "không"}
              // name="khong"
              onChange={handleCheckbox}
              type="radio"
              value="không"
            />
            Không
          </label>
        </div>
        <div>
          <label>
            <input
              checked={form.recommend === "có thể"}
              // name="co the"
              onChange={handleCheckbox}
              type="radio"
              value="có thể"
            />
            Có thể
          </label>
        </div>
      </div>
      <div>
        <h2> Ngôn ngữ lập trình và Frameword bạn đã biết? </h2>
        <div>
          <label>
            <input
              // checked={form.recommend}
              onChange={handleCheckbox}
              type="checkbox"
            />
            C
          </label>
        </div>
        <div>
          <label>
            <input
              // checked={form.recommend}
              onChange={handleCheckbox}
              type="checkbox"
            />
            C++
          </label>
        </div>
        <div>
          <label>
            <input
              // checked={form.recommend}
              onChange={handleCheckbox}
              type="checkbox"
            />
            C#
          </label>
        </div>
      </div>
      <div>
        <h2> Bạn có câu hỏi gì cho IT việc không?</h2>
        <textarea onChange={(e) => onInput("question", e)} />
      </div>
      <button onClick={onSubmit}> Submit</button>

      {show && (
        <div>
          <p>
            Họ tên : <span>{form.name}</span>
          </p>
          <p>
            Email: <span>{form.email}</span>
          </p>
          <p>
            Tuổi: <span>{form.age}</span>
          </p>
          <p>
            Hiện tại bạn đang là : <span>{form.role}</span>
          </p>
          <p>
            Bạn sẽ giới thiệu IT việc cho bạn bè chứ:
            <span>{form.recommend}</span>
          </p>
          <p>
            Ngôn ngữ lập trình của bạn là : <span>{form.skills}</span>
          </p>
          <p>
            Bạn có câu hỏi gì không : <span>{form.question}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Page8;
