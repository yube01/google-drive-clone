import "./folder.scss"

const Folders = ({ f }) => {
  return (
    <div className="folders">
      <div className="fo">
      <span className="material-symbols-outlined">folder</span>
      <p>{f.folderName}</p>
      </div>
      <span className="material-symbols-outlined">more_vert</span>
    </div>
  );
};

export default Folders;
