import { useProductsList } from "./model/use-products-list";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/shared/ui/kit/card";
import { Button } from "@/shared/ui/kit/button";

const ProductListPage = () => {
  const { data, isFetching, isError, error } = useProductsList();

  if (isFetching) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Загружаем продукты...
            </h2>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Ошибка загрузки
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {error?.message || "Неизвестная ошибка"}
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => window.location.reload()}
            >
              Попробовать снова
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Каталог продуктов
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Найдено {data?.length || 0} товаров
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                Сортировка
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700"
              >
                <CardHeader className="pb-3">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2">
                      <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        В наличии
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pb-3">
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-3">
                    {product.description}
                  </CardDescription>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      ${product.price}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <span className="text-sm font-medium">4.5</span>
                      <span className="text-xs ml-1">★</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex gap-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                    >
                      В корзину
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors"
                    >
                      ♡
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Продукты не найдены
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {data && data.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="text-center">
            <Button variant="outline" size="lg" className="px-8">
              Загрузить еще
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export const Component = ProductListPage;
