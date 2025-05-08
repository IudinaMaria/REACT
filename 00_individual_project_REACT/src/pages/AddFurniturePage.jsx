import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * Страница для добавления нового товара в каталог.
 * Позволяет пользователю ввести данные товара, такие как название, цена, описание и ссылка на изображение, и отправить эти данные на сервер.
 *
 * @component
 * @returns {JSX.Element} Страница для добавления нового товара.
 */

function AddFurniturePage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  /**
   * Проверка корректности URL изображения.
   *
   * @param {string} url Ссылка на изображение.
   * @returns {boolean} Возвращает true, если URL изображения валиден.
   */

  const isImageUrlValid = (url) => {
    return /^https?:\/\/.*\.(jpg|jpeg|png|gif)$/.test(url);
  };

  /**
   * Обработчик отправки формы.
   * Выполняет валидацию формы, отправку данных на сервер и обработку ответа.
   *
   * @param {Object} e Событие отправки формы.
   */

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      title.trim() !== "" &&
      description.trim() !== "" &&
      !isNaN(price) &&
      Number(price) > 0 &&
      isImageUrlValid(imageUrl);

    setValidated(true);

    if (!isValid) return;

    axios
      .post("https://67e3389497fc65f5353912f7.mockapi.io/Items", {
        title,
        price,
        description,
        imageUrl,
      })
      .then((response) => {
        console.log("Товар добавлен:", response.data);
        navigate("/", { state: { success: true } });
      })
      .catch((error) => {
        console.error("Ошибка при добавлении товара:", error);
      });
  };

  return (
    <div className="container my-5">
      <h1>Добавить мебель</h1>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Название товара</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите название"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isInvalid={validated && title.trim() === ""}
            isValid={validated && title.trim() !== ""}
          />
          <Form.Control.Feedback type="invalid">
            Введите название.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Цена</Form.Label>
          <Form.Control
            type="number"
            placeholder="Введите цену"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            isInvalid={
              validated && (price === "" || isNaN(price) || Number(price) <= 0)
            }
            isValid={validated && !isNaN(price) && Number(price) > 0}
          />
          <Form.Control.Feedback type="invalid">
            Введите корректную цену.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Описание</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Введите описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            isInvalid={validated && description.trim() === ""}
            isValid={validated && description.trim() !== ""}
          />
          <Form.Control.Feedback type="invalid">
            Введите описание.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formImageUrl">
          <Form.Label>Ссылка на изображение</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите URL изображения"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            isInvalid={validated && !isImageUrlValid(imageUrl)}
            isValid={validated && isImageUrlValid(imageUrl)}
          />
          <Form.Control.Feedback type="invalid">
            Введите корректный URL (jpg, jpeg, png, gif).
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Добавить товар
        </Button>
      </Form>
    </div>
  );
}

export default AddFurniturePage;
