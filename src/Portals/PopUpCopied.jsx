export const PopUpCopied = ({ copied }) => {
  return (
    <div style={{ position: "relative", paddingBottom: "4rem" }}>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied to clipboard
        </div>
      )}
    </div>
  );
};
