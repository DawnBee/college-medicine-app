from rest_framework.response import Response

# Custom function that expects a limit to querysets
def _list(self, request, *args, **kwargs):
	limit = request.query_params.get('limit', None)
	queryset = self.queryset
	if limit:
		queryset = queryset[:int(limit)]
	serializer = self.get_serializer(queryset, many=True)
	return Response(serializer.data)