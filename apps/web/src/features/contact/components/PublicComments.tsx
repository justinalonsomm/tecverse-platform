interface Props {
  comments: {
    name: string;
    message: string;
  }[];
}

export function PublicComments({
  comments,
}: Props) {

  return (
    <div className="mt-12">

      <h3 className="
        mb-6
        text-2xl
        font-black
        text-white
      ">
        Comentarios Públicos
      </h3>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.name}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
            "
          >
            <p className="
              font-semibold
              text-white
            ">
              {comment.name}
            </p>

            <p className="
              mt-2
              text-white/60
            ">
              {comment.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}