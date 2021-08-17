import Modal from "react-bootstrap/Modal";
import RandomTweet from "./RandomTweet";

const RandomTweetModal = ({
  isRandomTweetModalOpen,
  hideRandomTweetModal,
  randomTweet,
}) => {
  return (
    <div>
      <Modal
        show={isRandomTweetModalOpen}
        onHide={hideRandomTweetModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <RandomTweet randomTweet={randomTweet} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RandomTweetModal;
