#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["HowPatheticIam.Core/HowPatheticIam.Core.csproj", "HowPatheticIam.Core/"]
RUN dotnet restore "HowPatheticIam.Core/HowPatheticIam.Core.csproj"
COPY . .
WORKDIR "/src/HowPatheticIam.Core"
RUN dotnet build "HowPatheticIam.Core.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "HowPatheticIam.Core.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HowPatheticIam.Core.dll"]