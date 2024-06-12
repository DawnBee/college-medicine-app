from rest_framework.response import Response

def _list(viewset, request, *args, **kwargs):
    limit = request.query_params.get('limit', None)
    # Respect any filtering or ordering
    queryset = viewset.filter_queryset(viewset.get_queryset())

    if limit:
        try:
            limit = int(limit)
            queryset = queryset[:limit]
        except ValueError:
            pass  # Ignore invalid limit values

    serializer = viewset.get_serializer(queryset, many=True)
    return Response(serializer.data)