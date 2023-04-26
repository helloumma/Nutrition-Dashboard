import { autoComplete } from "@/types/types";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

const AutoComplete = ({
  onChangeAC,
  onSubmitAC,
  dataAC,
  valueAC,
  isLoading,
}: autoComplete) => {
  const formik = useFormik({
    initialValues: {
      searchItem: "",
    },
    validationSchema: Yup.object({
      searchItem: Yup.string().required("Search item is required"),
    }),
    onSubmit: onSubmitAC,
  });
  return (
    <>
      <input
        type="text"
        placeholder="search item..."
        className={`border ${
          formik.errors.searchItem
            ? "border-red-500"
            : valueAC
            ? "border-black"
            : ""
        } h-10 mt-8 w-full`}
        {...formik.getFieldProps("searchItem")}
        value={valueAC}
        onChange={onChangeAC}
      />
      <button
        type="submit"
        className="bg-black h-10 w-full flex justify-center mt-4 text-white flex justify-center items-center	font-semibold	"
        onClick={onSubmitAC}
      >
        Add
      </button>
      <div>
        {isLoading
          ? "loading"
          : dataAC
              ?.filter((item: { food_name: string }) => {
                const searchTerm = valueAC;
                const fullName = item.food_name.toLowerCase();
                return (
                  (searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm) ||
                  fullName == searchTerm
                );
              })
              ?.map((item: { food_name: string; photo: any; thumb: any }) => (
                <div className="flex" key={Math.random()}>
                  <Image
                    src={item.photo.thumb}
                    onClick={onSubmitAC}
                    alt={item.food_name}
                    className="cursor-pointer"
                    width={75}
                    height={200}
                  />
                  {item.food_name}
                </div>
              ))}
      </div>
    </>
  );
};
export default AutoComplete;

/*import { autoComplete } from "@/types/types";
import Image from "next/image";
import { Formik } from "formik";

const AutoComplete = ({
  onChangeAC,
  onSubmitAC,
  dataAC,
  valueAC,
  isLoading,
}: autoComplete) => {
  return (
    <Formik
      initialValues={{ searchInput: "" }}
      validate={(values) => {
        const errors: any = {};
        if (!values.searchInput) {
          errors.actorActressOne = "please enter something to add to a board";
        }

        return errors;
      }}
      onSubmit={onSubmitAC}
    >
      {(formik) => {
        const { values, handleChange, errors, touched, handleBlur } = formik;
        return (
          <>
            <input
              type="text"
              placeholder="search item..."
              className={
                errors.searchInput && touched.searchInput
                  ? "border border-red-500 h-10 mt-8 w-full"
                  : "border border-black h-10 mt-8 w-full"
              }
              value={values.searchInput}
              onBlur={handleBlur}
              onChange={(e) => {
                handleChange(e);
                onChangeAC;
              }}
              id={"searchInput"}
              name={"searchInput"}
            />
            {errors.searchInput && (
              <p className="text-red-500">{errors.searchInput}</p>
            )}
            <button
              type="submit"
              className="bg-black h-10 w-full flex justify-center mt-4 text-white flex justify-center items-center	font-semibold	"
              onClick={onSubmitAC}
            >
              Add
            </button>
</>
  );
      }}
    </Formik>
            <div>
              {isLoading
                ? "loading"
                : dataAC
                    ?.filter((item: { food_name: string }) => {
                      const searchTerm = valueAC;
                      const fullName = item.food_name.toLowerCase();
                      return (
                        (searchTerm &&
                          fullName.startsWith(searchTerm) &&
                          fullName !== searchTerm) ||
                        fullName == searchTerm
                      );
                    })
                    ?.map(
                      (item: { food_name: string; photo: any; thumb: any }) => (
                        <div className="flex" key={Math.random()}>
                          <Image
                            src={item.photo.thumb}
                            onClick={onSubmitAC}
                            alt={item.food_name}
                            className="cursor-pointer"
                            width={75}
                            height={200}
                          />
                          {item.food_name}
                        </div>
                      )
                    )}
            </div>
         
      
  );
};

export default AutoComplete;
 */

/*
import { autoComplete } from "@/types/types";
import Image from "next/image";

const AutoComplete = ({
  onChangeAC,
  onSubmitAC,
  dataAC,
  valueAC,
  isLoading,
}: autoComplete) => (
  <>
    <input
      type="text"
      placeholder="search item..."
      className=" border border-black0 h-10 mt-8 w-full"
      value={valueAC}
      onChange={onChangeAC}
    />
    <button
      type="submit"
      className="bg-black h-10 w-full flex justify-center mt-4 text-white flex justify-center items-center	font-semibold	"
      onClick={onSubmitAC}
    >
      Add
    </button>
    <div>
      {isLoading
        ? "loading"
        : dataAC
            ?.filter((item: { food_name: string }) => {
              const searchTerm = valueAC;
              const fullName = item.food_name.toLowerCase();
              return (
                (searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm) ||
                fullName == searchTerm
              );
            })
            ?.map((item: { food_name: string; photo: any; thumb: any }) => (
              <div className="flex" key={Math.random()}>
                <Image
                  src={item.photo.thumb}
                  onClick={onSubmitAC}
                  alt={item.food_name}
                  className="cursor-pointer"
                  width={75}
                  height={200}
                />
                {item.food_name}
              </div>
            ))}
    </div>
  </>
);
export default AutoComplete; */
