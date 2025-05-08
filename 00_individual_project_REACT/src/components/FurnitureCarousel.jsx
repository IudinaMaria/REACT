import { useState } from "react";
import { Carousel, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

/**
 * Компонент карусели с мебелью.
 * Отображает слайды с мебелью и позволяет добавлять товар в корзину.
 * При клике на кнопку "Подробнее" отображается модальное окно с описанием товара.
 *
 * @component
 * @returns {JSX.Element} Карусель с мебелью и модальное окно для отображения деталей товара.
 */

function FurnitureCarousel() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useDispatch();

  const furniture = [
    {
      id: 1,
      title: "Диван «Комфорт»",
      price: "3999",
      description: "Мягкий угловой диван для уютных вечеров.",
      imageUrl: "/images/1.jpg",
    },
    {
      id: 2,
      title: "Обеденный стол «Модерн»",
      price: "2499",
      description: "Элегантный стол из дуба на 6 персон.",
      imageUrl: "/images/2.jpg",
    },
    {
      id: 3,
      title: "Кресло «Релакс»",
      price: "1799",
      description: "Эргономичное кресло для чтения и отдыха.",
      imageUrl: "/images/3.jpg",
    },
  ];

  /**
   * Открывает модальное окно с деталями выбранного товара.
   *
   * @param {Object} item Товар, информацию о котором нужно отобразить.
   */

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  /**
   * Добавляет товар в корзину.
   *
   * @param {Object} item Товар, который добавляется в корзину.
   */

  const handleAddToCart = (item) => {
    dispatch(
      addItem({
        id: item.id,
        title: item.title,
        price: parseInt(item.price),
        imageUrl: item.imageUrl,
      })
    );
    toast.success(`"${item.title}" добавлен в корзину`);
  };

  /**
   * Обработчик смены активного слайда в карусели.
   *
   * @param {number} selectedIndex Индекс выбранного слайда.
   */

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        fade
        indicators={false}
        interval={3000}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        pause={false}
        wrap={true}
        className="w-100"
      >
        {furniture.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="position-relative">
              <img
                className="d-block w-100"
                src={item.imageUrl}
                alt={item.title}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "50vh",
                  maxHeight: "500px",
                }}
              />
              <div
                className="carousel-caption d-flex justify-content-center align-items-center position-absolute w-100 h-100"
                style={{
                  top: 0,
                  left: 0,
                  background: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  className="text-center text-white p-3 w-100"
                  style={{ maxWidth: "600px" }}
                >
                  <h3 className="fs-4">{item.title}</h3>
                  <p className="mb-2">{item.price} лей</p>
                  <Button
                    variant="light"
                    className="mt-2"
                    onClick={() => handleShowModal(item)}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {selectedItem && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Описание:</h5>
            <p>{selectedItem.description}</p>
            <p>
              <strong>Цена:</strong> {selectedItem.price} лей
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Закрыть
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleAddToCart(selectedItem);
                handleCloseModal();
              }}
            >
              В корзину
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default FurnitureCarousel;
